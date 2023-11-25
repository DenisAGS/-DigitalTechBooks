import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo-administrador',
  templateUrl: './catalogo-administrador.component.html',
  styleUrls: ['./catalogo-administrador.component.css']
})
export class CatalogoAdministradorComponent {
  listas = [
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      descripcion: 'Ebook',
      publicacionDate: new Date(2023, 0, 1),
      categoria: 'Programming',
      status: 'Disponible'
    },
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      descripcion: 'Ebook',
      publicacionDate: new Date(2023, 0, 1),
      categoria: 'Programming',
      status: 'En reserva'
    },
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      descripcion: 'Ebook',
      publicacionDate: new Date(2023, 0, 1),
      categoria: 'Programming',
      status: 'Prestado'
    },
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'Disponible':
        return 'text-green';
      case 'En reserva':
        return 'text-blue';
      case 'Prestado':
        return 'text-red';
      default:
        return '';
    }
  }

  reloadTable() {
    console.log('Tabla recargada');
  }
}
