import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface Noticia {
  id: number;
  titulo: string;
  data: Date;
  resumo: string;
  conteudoCompleto: string;
  expandida: boolean;
  favoritada: boolean;
  urgente: boolean;
  categoria: string;
  fonte?: string;
  link?: string;
  imagemUrl?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  temperatura = 25;
  termoBusca = '';
  abas = ['Últimas', 'Favoritas'];
  abaAtiva = 'Últimas';
  carregando = false;
  agora = new Date();
  
  noticiasFiltradas: Noticia[] = [];
  private noticiasOriginais: Noticia[] = [];
  private updateSubscription!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carregarNoticias();
    this.iniciarAtualizacaoAutomatica();
  }

  carregarNoticias() {
    this.carregando = true;
    
    setTimeout(() => {
      this.noticiasOriginais = [
        {
          id: 1,
          titulo: 'Evento de Louvor na Sede',
          data: new Date(),
          resumo: 'Venha participar do nosso grande evento de louvor no próximo sábado',
          conteudoCompleto: 'O evento acontecerá no próximo sábado às 19h na sede central. Teremos a participação especial do coral jovem e ministração do pastor convidado. Entrada franca. Traga sua família e amigos para esse momento de adoração!',
          expandida: false,
          favoritada: false,
          urgente: true,
          categoria: 'Eventos',
          fonte: 'ADRN Notícias',
          link: '/noticias/1',
          imagemUrl: 'assets/evento-louvor.jpg'
        },
        {
          id: 2,
          titulo: 'Campanha de Arrecadação',
          data: new Date(),
          resumo: 'Participe da nossa campanha de alimentos não perecíveis',
          conteudoCompleto: 'Estamos arrecadando alimentos não perecíveis para famílias carentes da comunidade. Você pode doar itens como arroz, feijão, óleo, açúcar e farinha. As doações podem ser entregues na secretaria da igreja de segunda a sexta, das 8h às 17h. Contamos com sua generosidade!',
          expandida: false,
          favoritada: true,
          urgente: false,
          categoria: 'Social',
          link: '/noticias/2',
          imagemUrl: 'assets/campanha-alimentos.jpg'
        }
      ];
      this.noticiasFiltradas = [...this.noticiasOriginais];
      this.carregando = false;
      this.agora = new Date();
    }, 1000);
  }

  toggleFavorito(noticia: Noticia) {
    noticia.favoritada = !noticia.favoritada;
    this.aplicarFiltros();
  }

  toggleExpandir(noticia: Noticia) {
    noticia.expandida = !noticia.expandida;
  }

  limparBusca() {
    this.termoBusca = '';
    this.aplicarFiltros();
  }

  selecionarAba(aba: string) {
    this.abaAtiva = aba;
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let noticiasFiltradas = [...this.noticiasOriginais];
    
    if (this.abaAtiva === 'Favoritas') {
      noticiasFiltradas = noticiasFiltradas.filter(n => n.favoritada);
    }
    
    if (this.termoBusca) {
      const termo = this.termoBusca.toLowerCase();
      noticiasFiltradas = noticiasFiltradas.filter(n => 
        n.titulo.toLowerCase().includes(termo) || 
        n.resumo.toLowerCase().includes(termo) ||
        n.conteudoCompleto.toLowerCase().includes(termo)
      );
    }
    
    this.noticiasFiltradas = noticiasFiltradas;
  }

  iniciarAtualizacaoAutomatica() {
    this.updateSubscription = interval(30000)
      .pipe(
        switchMap(() => {
          this.carregando = true;
          return this.http.get<Noticia[]>('SUA_API_AQUI');
        })
      )
      .subscribe({
        next: (noticias) => {
          this.noticiasOriginais = noticias;
          this.noticiasFiltradas = [...this.noticiasOriginais];
          this.carregando = false;
          this.agora = new Date();
          this.aplicarFiltros();
        },
        error: (err) => {
          console.error('Erro ao atualizar notícias:', err);
          this.carregando = false;
        }
      });
  }

  ngOnDestroy() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }
}