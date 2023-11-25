import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  title = 'Iniciar sesion';
  username: string = '';
  password: string = '';
  placeholderText: string = 'Introduce tu nombre de usuario';
  passwordVisible = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }
 
  login() {
 
    if (this.username === 'usuarioValido' && this.password === 'contrasenaValida') {
      this.placeholderText = 'Usuario autenticado. No se puede modificar.';
    } else {
      this.placeholderText = 'Usuario no válido. Introduce un nombre de usuario válido.';
    }
  }
}
