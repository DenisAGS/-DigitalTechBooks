import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../servicios/libro.service';

@Component({
  selector: 'app-catalogo-usuario',
  templateUrl: './catalogo-usuario.component.html',
  styleUrls: ['./catalogo-usuario.component.css']
})
export class CatalogoUsuarioComponent implements OnInit {
  categoriaSeleccionada: string = 'todas';
  libros: any[] = [];
  librosFiltrados: any[] = [];

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.librosService.getLibros().subscribe(libros => {
      this.libros = libros;
      this.filtrarLibros();
    });
  }

  filtrarLibros(): void {
    if (this.categoriaSeleccionada === 'todas') {
      this.librosFiltrados = this.libros;
    } else {
      this.librosFiltrados = this.libros.filter(libro => libro.categoria === this.categoriaSeleccionada);
    }
  }

  comprarLibro(libro: any): void {
    console.log('Comprando libro:', libro);
  }

}
