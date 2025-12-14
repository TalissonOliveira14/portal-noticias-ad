import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="app-container">
      <header class="app-header">
        <nav class="app-nav">
          <a routerLink="/" routerLinkActive="active">Home</a>
        </nav>
      </header>

      <main class="app-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .app-header {
      background: #2c3e50;
      padding: 1rem;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .app-nav a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      margin: 0 0.5rem;
    }
    .app-nav a.active {
      background: #3498db;
      font-weight: bold;
    }
    .app-content {
      padding: 2rem;
      flex: 1;
    }
    .app-footer {
      background: #2c3e50;
      color: white;
      text-align: center;
      padding: 1rem;
    }
  `]
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  constructor(public router: Router) {}
}