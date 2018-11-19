import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  titulo = 'Mis cursos';
  cursos = [
    {
      id: 1,
      nombre: 'Angular 2',
      descripcion: 'Introducción al desarrollo avanzado en Js',
      duracion: 8
    },
    {
      id: 2,
      nombre: 'Angular 3',
      descripcion: 'Introducción al desarrollo avanzado en Js',
      duracion: 5
    },
    {
      id: 1,
      nombre: 'Angular 2',
      descripcion: 'Introducción al desarrollo avanzado en Js',
      duracion: 10
    },
  ];

  seleccionar(curso) {
    console.log(curso);
  }
}
