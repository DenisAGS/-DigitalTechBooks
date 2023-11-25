import { Component } from '@angular/core';

@Component({
  selector: 'app-compras-administrador',
  templateUrl: './compras-administrador.component.html',
  styleUrls: ['./compras-administrador.component.css']
})
export class ComprasAdministradorComponent {
  listas = [
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      descripcion: 'Programming',
      compraDate: new Date(2023, 0, 1),
      categoria: 'Programming'
    },
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      descripcion: 'Programming',
      compraDate: new Date(2023, 0, 1),
      categoria: 'Programming'

    },
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      descripcion: 'Programming',
      compraDate: new Date(2023, 0, 1),
      categoria: 'Programming',
    },
  ];

  reloadTable() {
    console.log('Tabla recargada');
  }
}
