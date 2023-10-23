import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  title = 'Iniciar sesion';
  email = '';
  password = '';
 
  // Method for logging in
 
  login() {
 
     console.log('Logging in...');
 
     console.log('Email:', this.email);
 
     console.log('Password:', this.password);
 
  }
}
