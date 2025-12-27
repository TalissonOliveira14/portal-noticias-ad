import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService, IrmaoForm } from '../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formularioIrmao: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService // 🔥 agora funciona
  ) {
    this.formularioIrmao = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      congregacao: ['', Validators.required],
      setor: ['', Validators.required],
      novoConvertido: [false],
      evangelico: [false]
    });
  }

  onSubmit() {
    if (this.formularioIrmao.invalid) return;

    const dados: IrmaoForm = this.formularioIrmao.value;

    this.apiService.salvarFormulario(dados).subscribe({
      next: () => {
        alert('Cadastro salvo com sucesso!');
        this.formularioIrmao.reset({
          novoConvertido: false,
          evangelico: false
        });
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro ao salvar:', err);
        alert('Erro ao salvar formulário');
      }
    });
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
