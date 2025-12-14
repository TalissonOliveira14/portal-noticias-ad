import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    title: 'Página Inicial'
  },
  { 
    path: 'cadastro', 
    loadComponent: () => import('./formulario/formulario.component').then(m => m.FormularioComponent),
    title: 'Formulário de Cadastro'
  }
];