import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 2rem;">
      <h1>Página de Teste Funcionando!</h1>
      <p>Navegação está operacional</p>
    </div>
  `,
  styles: []
})
export class TesteComponent {}