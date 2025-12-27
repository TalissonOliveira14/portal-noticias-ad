import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TesteComponent } from './teste.component'; // Nome corrigido

describe('TesteComponent', () => { // Descrição atualizada
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteComponent] // Usando o componente Standalone
    }).compileComponents();

    fixture = TestBed.createComponent(TesteComponent); // Nome corrigido
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});