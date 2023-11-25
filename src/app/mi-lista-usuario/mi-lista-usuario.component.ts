import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-lista-usuario',
  templateUrl: './mi-lista-usuario.component.html',
  styleUrls: ['./mi-lista-usuario.component.css']
})
export class MiListaUsuarioComponent {
  listas = [
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      categoria: 'Programming',
      adquisicionDate: new Date(2023, 0, 1),
      finalizacionDate: new Date(2023, 1, 1),
      devueltaDate: new Date(),
      status: 'Activo'
    },
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      categoria: 'Programming',
      adquisicionDate: new Date(2023, 0, 1),
      finalizacionDate: new Date(2023, 1, 1),
      devueltaDate: new Date(),
      status: 'Devuelto'
    },
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      categoria: 'Programming',
      adquisicionDate: new Date(2023, 0, 1),
      finalizacionDate: new Date(2023, 1, 1),
      devueltaDate: new Date(),
      status: 'Vencido'
    },
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'Activo':
        return 'text-green';
      case 'Devuelto':
        return 'text-blue';
      case 'Vencido':
        return 'text-red';
      default:
        return '';
    }
  }

  reloadTable() {
    console.log('Tabla recargada');
  }
}
