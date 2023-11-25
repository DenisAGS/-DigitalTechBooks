import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { AcercaLandingComponent } from './acerca-landing/acerca-landing.component';
import { CatalogoLandingComponent } from './catalogo-landing/catalogo-landing.component';
import { LandingComponent } from './landing/landing.component';
import { ServiciosLandingComponent } from './servicios-landing/servicios-landing.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { EditarCuentaComponent } from './editar-cuenta/editar-cuenta.component';
import { MiListaUsuarioComponent } from './mi-lista-usuario/mi-lista-usuario.component';
import { ReservaUsuarioComponent } from './reserva-usuario/reserva-usuario.component';
import { CatalogoAdministradorComponent } from './catalogo-administrador/catalogo-administrador.component';
import { ComprasAdministradorComponent } from './compras-administrador/compras-administrador.component';
import { ServiciosAdministradorComponent } from './servicios-administrador/servicios-administrador.component';
import { ReservaAdministradorComponent } from './reserva-administrador/reserva-administrador.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { DashboardAdministradorComponent } from './dashboard-administrador/dashboard-administrador.component';
import { ComprasUsuarioComponent } from './compras-usuario/compras-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLandingComponent,
    FooterLandingComponent,
    AcercaLandingComponent,
    CatalogoLandingComponent,
    LandingComponent,
    ServiciosLandingComponent,
    InicioSesionComponent,
    RegistroComponent,
    MenuUsuarioComponent,
    DashboardUsuarioComponent,
    HeaderDashboardComponent,
    EditarCuentaComponent,
    MiListaUsuarioComponent,
    ReservaUsuarioComponent,
    CatalogoAdministradorComponent,
    ComprasAdministradorComponent,
    ServiciosAdministradorComponent,
    ReservaAdministradorComponent,
    MenuAdministradorComponent,
    DashboardAdministradorComponent,
    ComprasUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
