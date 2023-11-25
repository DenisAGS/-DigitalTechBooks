import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CatalogoLandingComponent } from './catalogo-landing/catalogo-landing.component';
import { ServiciosLandingComponent } from './servicios-landing/servicios-landing.component';
import { AcercaLandingComponent } from './acerca-landing/acerca-landing.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import { EditarCuentaComponent } from './editar-cuenta/editar-cuenta.component';
import { MiListaUsuarioComponent } from './mi-lista-usuario/mi-lista-usuario.component';
import { ReservaUsuarioComponent } from './reserva-usuario/reserva-usuario.component';

/*Inicio de administrador */
import { CatalogoAdministradorComponent } from './catalogo-administrador/catalogo-administrador.component';
import { ComprasAdministradorComponent } from './compras-administrador/compras-administrador.component';
import { ServiciosAdministradorComponent } from './servicios-administrador/servicios-administrador.component';
import { ReservaAdministradorComponent } from './reserva-administrador/reserva-administrador.component';

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
    path: 'dashboard-usuario',
    component: DashboardUsuarioComponent
  },
  {
    path: 'acerca-landing',
    component: AcercaLandingComponent
  },
  {
    path: 'editar-cuenta',
    component: EditarCuentaComponent
  },
  {
    path: 'mi-lista-usuario',
    component: MiListaUsuarioComponent
  },
  {
    path: 'reserva-usuario',
    component: ReservaUsuarioComponent
  },
  {
    path: 'catalogo-administrador',
    component: CatalogoAdministradorComponent
  },
  {
    path: 'catalogo-administrador',
    component: CatalogoAdministradorComponent
  },
  {
    path: 'compras-administrador',
    component: ComprasAdministradorComponent
  },
  {
    path: 'servicios-administrador',
    component: ServiciosAdministradorComponent
  },
  {
    path: 'reserva-administrador',
    component: ReservaAdministradorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
