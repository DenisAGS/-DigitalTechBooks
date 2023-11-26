import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  getLibros(): Observable<any[]> {
    const libros = [
      { titulo: 'Filosofia felina', autor: 'John Gray', categoria: 'misterio', descripcion: 'Lorem ipsctetderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imagen: 'assets/images/catalogo-landing/libros/filosofia.png' },
      { titulo: 'Coraline', autor: 'Neil Gaiman', categoria: 'ficcion', descripcion: 'Lorem ipsctetderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imagen: 'assets/images/catalogo-landing/libros/coraline.png' },
      { titulo: 'Tres meses', autor: 'Joana Marcus', categoria: 'teatro', descripcion: 'Lorem ipsctetderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imagen: 'assets/images/catalogo-landing/libros/tres meses.png' },
      { titulo: 'El quinto infierno', autor: 'F Oliverio', categoria: 'poesia', descripcion: 'Lorem ipsctetderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imagen: 'assets/images/catalogo-landing/libros/quinto.png' },
      { titulo: 'Filosofia felina', autor: 'John Gray', categoria: 'ciencia', descripcion: 'Lorem ipsctetderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imagen: 'assets/images/catalogo-landing/libros/filosofia.png' },
      { titulo: 'Coraline', autor: 'Neil Gaiman', categoria: 'historia', descripcion: 'Lorem ipsctetderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imagen: 'assets/images/catalogo-landing/libros/coraline.png' },
    ];

    return of(libros);
  }
}
