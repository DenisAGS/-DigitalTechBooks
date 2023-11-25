import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-administrador',
  templateUrl: './servicios-administrador.component.html',
  styleUrls: ['./servicios-administrador.component.css']
})
export class ServiciosAdministradorComponent {
  listas = [
    {
      referencia: '1',
      tipo: 'Angular for Beginners',
      usuario: 'John Doe',
      usuarioImage: 'assets/images/generales/user1.png',
      asunto: 'Programming',
      comentarioDate: new Date(2023, 0, 1),
    },
    {
      referencia: '2',
      tipo: 'Angular for Beginners',
      usuario: 'John Doe',
      usuarioImage: 'assets/images/generales/user1.png',
      asunto: 'Programming',
      comentarioDate: new Date(2023, 0, 1),
    },
    {
      referencia: '3',
      tipo: 'Angular for Beginners',
      usuario: 'John Doe',
      usuarioImage: 'assets/images/generales/user1.png',
      asunto: 'Programming',
      comentarioDate: new Date(2023, 0, 1),
    },
  ];

  reloadTable() {
    console.log('Tabla recargada');
  }
}
