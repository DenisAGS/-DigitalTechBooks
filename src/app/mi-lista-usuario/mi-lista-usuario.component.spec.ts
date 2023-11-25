import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiListaUsuarioComponent } from './mi-lista-usuario.component';

describe('MiListaUsuarioComponent', () => {
  let component: MiListaUsuarioComponent;
  let fixture: ComponentFixture<MiListaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiListaUsuarioComponent]
    });
    fixture = TestBed.createComponent(MiListaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
