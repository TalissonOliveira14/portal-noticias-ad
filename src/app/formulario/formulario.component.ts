import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface IrmaoForm {
  nome: string;
  congregacao: string;
  setor: string;
  novoConvertido: boolean;
  evangelico: boolean;
}

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="form-container">
      <h1>Cadastro de Irmão</h1>
      
      <form [formGroup]="formularioIrmao" (ngSubmit)="onSubmit()" novalidate>
        <div class="form-group">
          <label for="nome">Nome do Irmão *</label>
          <input 
            type="text" 
            id="nome" 
            formControlName="nome" 
            placeholder="Digite o nome completo"
            [class.invalid]="formularioIrmao.get('nome')?.invalid && formularioIrmao.get('nome')?.touched"
          >
          @if (formularioIrmao.get('nome')?.errors?.['required'] && formularioIrmao.get('nome')?.touched) {
            <div class="error-message">Nome é obrigatório</div>
          }
          @if (formularioIrmao.get('nome')?.errors?.['minlength']) {
            <div class="error-message">Mínimo 3 caracteres</div>
          }
        </div>

        <div class="form-group">
          <label for="congregacao">Congregação *</label>
          <input 
            type="text" 
            id="congregacao" 
            formControlName="congregacao" 
            placeholder="Nome da congregação"
            [class.invalid]="formularioIrmao.get('congregacao')?.invalid && formularioIrmao.get('congregacao')?.touched"
          >
          @if (formularioIrmao.get('congregacao')?.errors?.['required'] && formularioIrmao.get('congregacao')?.touched) {
            <div class="error-message">Congregação é obrigatória</div>
          }
        </div>

        <div class="form-group">
          <label for="setor">Setor *</label>
          <input 
            type="text" 
            id="setor" 
            formControlName="setor" 
            placeholder="Setor da congregação"
            [class.invalid]="formularioIrmao.get('setor')?.invalid && formularioIrmao.get('setor')?.touched"
          >
          @if (formularioIrmao.get('setor')?.errors?.['required'] && formularioIrmao.get('setor')?.touched) {
            <div class="error-message">Setor é obrigatório</div>
          }
        </div>

        <div class="checkbox-group">
          <label class="checkbox-container">
            <input type="checkbox" formControlName="novoConvertido">
            <span class="checkmark"></span>
            Novo Convertido
          </label>

          <label class="checkbox-container">
            <input type="checkbox" formControlName="evangelico">
            <span class="checkmark"></span>
            É Evangélico
          </label>
        </div>

        <div class="form-actions">
          <button type="button" class="btn btn-secondary" (click)="voltar()">Voltar</button>
          <button type="submit" class="btn btn-primary" [disabled]="formularioIrmao.invalid">Salvar</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .form-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    input[type="text"] {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    
    .invalid {
      border-color: #e74c3c !important;
    }
    
    .error-message {
      color: #e74c3c;
      font-size: 0.85rem;
      margin-top: 0.5rem;
    }
    
    /* Estilos para checkboxes... */
  `]
})
export class FormularioComponent {
  formularioIrmao: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    // Inicialização do formulário movida para o construtor
    this.formularioIrmao = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      congregacao: ['', Validators.required],
      setor: ['', Validators.required],
      novoConvertido: [false],
      evangelico: [false]
    });
  }

  onSubmit() {
    if (this.formularioIrmao.valid) {
      const dados: IrmaoForm = this.formularioIrmao.value;
      console.log('Dados enviados:', dados);
      alert('Cadastro salvo com sucesso!');
      this.formularioIrmao.reset({
        novoConvertido: false,
        evangelico: false
      });
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }
}