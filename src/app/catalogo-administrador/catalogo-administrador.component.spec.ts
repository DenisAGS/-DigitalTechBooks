import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAdministradorComponent } from './catalogo-administrador.component';

describe('CatalogoAdministradorComponent', () => {
  let component: CatalogoAdministradorComponent;
  let fixture: ComponentFixture<CatalogoAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogoAdministradorComponent]
    });
    fixture = TestBed.createComponent(CatalogoAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
