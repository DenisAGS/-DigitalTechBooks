import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAdministradorComponent } from './servicios-administrador.component';

describe('ServiciosAdministradorComponent', () => {
  let component: ServiciosAdministradorComponent;
  let fixture: ComponentFixture<ServiciosAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosAdministradorComponent]
    });
    fixture = TestBed.createComponent(ServiciosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
