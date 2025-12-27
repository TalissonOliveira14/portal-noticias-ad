import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IrmaoForm {
  nome: string;
  congregacao: string;
  setor: string;
  novoConvertido: boolean;
  evangelico: boolean;
}

@Injectable({
  providedIn: 'root' // 🔥 ISSO RESOLVE O ERRO DE INJEÇÃO
})
export class ApiService {

  private readonly apiUrl = 'http://backend:3000/api';

  constructor(private http: HttpClient) {}

  salvarFormulario(dados: IrmaoForm): Observable<any> {
    return this.http.post(`${this.apiUrl}/formulario`, dados);
  }
}
