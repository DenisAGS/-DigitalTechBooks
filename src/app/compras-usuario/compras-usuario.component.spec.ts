import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasUsuarioComponent } from './compras-usuario.component';

describe('ComprasUsuarioComponent', () => {
  let component: ComprasUsuarioComponent;
  let fixture: ComponentFixture<ComprasUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasUsuarioComponent]
    });
    fixture = TestBed.createComponent(ComprasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
