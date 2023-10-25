import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  title = 'Crear cuenta';
  nombre = '';
  email = '';
  password = '';
  confirmarPassword = '';
 
  // Method for logging in
 
  registro() {
 
     console.log('Logging in...');

     console.log('confirmarPassword', this.confirmarPassword)

     console.log('Nombre' , this.nombre);
 
     console.log('Email:', this.email);
 
     console.log('Password:', this.password);
 
  }
}
