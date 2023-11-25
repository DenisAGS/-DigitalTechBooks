import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva-usuario',
  templateUrl: './reserva-usuario.component.html',
  styleUrls: ['./reserva-usuario.component.css']
})
export class ReservaUsuarioComponent {
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
      selected: false
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
      selected: false
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
      selected: false
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
