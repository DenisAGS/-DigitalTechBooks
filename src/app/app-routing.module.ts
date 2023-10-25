import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CatalogoLandingComponent } from './catalogo-landing/catalogo-landing.component';
import { ServiciosLandingComponent } from './servicios-landing/servicios-landing.component';
import { AcercaLandingComponent } from './acerca-landing/acerca-landing.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';

const routes: Routes = [
  {
    path:'',
    component: LandingComponent
  },
  {
    path: 'catalogo-landing',
    component: CatalogoLandingComponent
  },
  {
    path: 'servicios-landing',
    component: ServiciosLandingComponent
  },
  {
    path: 'iniciar-sesion',
    component: InicioSesionComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'menu',
    component: MenuUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
