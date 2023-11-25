import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva-administrador',
  templateUrl: './reserva-administrador.component.html',
  styleUrls: ['./reserva-administrador.component.css']
})
export class ReservaAdministradorComponent {
  listas = [
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      categoria: 'Programming',
      reservaDate: new Date(2023, 0, 1),
      status: 'Activo',
      usuarioImage: 'assets/images/generales/user1.png'
    },
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      categoria: 'Programming',
      reservaDate: new Date(2023, 0, 1),
      status: 'Pendiente',
      usuarioImage: 'assets/images/generales/user1.png'
    },
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      categoria: 'Programming',
      reservaDate: new Date(2023, 0, 1),
      status: 'Cancelado',
      usuarioImage: 'assets/images/generales/user1.png'
    },
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'Activo':
        return 'text-green';
      case 'Pendiente':
        return 'text-blue';
      case 'Cancelado':
        return 'text-red';
      default:
        return '';
    }
  }

  reloadTable() {
    console.log('Tabla recargada');
  }
}
