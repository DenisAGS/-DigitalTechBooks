import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasAdministradorComponent } from './compras-administrador.component';

describe('ComprasAdministradorComponent', () => {
  let component: ComprasAdministradorComponent;
  let fixture: ComponentFixture<ComprasAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasAdministradorComponent]
    });
    fixture = TestBed.createComponent(ComprasAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
