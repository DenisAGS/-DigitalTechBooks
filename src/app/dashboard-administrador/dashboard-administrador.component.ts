import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-administrador',
  templateUrl: './dashboard-administrador.component.html',
  styleUrls: ['./dashboard-administrador.component.css']
})
export class DashboardAdministradorComponent {
  listas = [
    {
      nombre: 'Denis',
      apellidoMaterno: 'Doe',
      apellidoPaterno: 'Santos',
      ciudad: 'Orizaba',
      correo: 'denis@gmail.com'
    },
    {
      nombre: 'Denis',
      apellidoMaterno: 'Doe',
      apellidoPaterno: 'Santos',
      ciudad: 'Orizaba',
      correo: 'denis@gmail.com'
    },
    {
      nombre: 'Denis',
      apellidoMaterno: 'Doe',
      apellidoPaterno: 'Santos',
      ciudad: 'Orizaba',
      correo: 'denis@gmail.com'
    },
  ];

  ngOnInit() {
    this.reloadTable();
  }

  numeroRegistros = 0;

  reloadTable() {
    this.numeroRegistros = this.listas.length;
  }
}
