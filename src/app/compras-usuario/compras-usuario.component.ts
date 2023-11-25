import { Component } from '@angular/core';

@Component({
  selector: 'app-compras-usuario',
  templateUrl: './compras-usuario.component.html',
  styleUrls: ['./compras-usuario.component.css']
})
export class ComprasUsuarioComponent {
  listas = [
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      precio: '$200',
      categoria: 'Programming',
      compraDate: new Date(),
    },
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      precio: '$200',
      categoria: 'Programming',
      compraDate: new Date(),
    },
    {
      isbn: '123456789',
      titulo: 'Angular for Beginners',
      autor: 'John Doe',
      autorImage: 'assets/images/generales/user1.png',
      tipo: 'Ebook',
      precio: '$200',
      categoria: 'Programming',
      compraDate: new Date(),
    }
  ];


  reloadTable() {
    console.log('Tabla recargada');
  }
}
