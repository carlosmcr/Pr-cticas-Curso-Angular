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
      duracion: 8,
      precio: 50.20,
      fecha: new Date(1992, 11, 5)
    },
    {
      id: 2,
      nombre: 'Angular 3',
      descripcion: 'Introducción al desarrollo avanzado en Js',
      duracion: 5,
      precio: 950.01,
      fecha: new Date()
    },
    {
      id: 1,
      nombre: 'Java',
      descripcion: 'Introducción al desarrollo avanzado en Js',
      duracion: 10,
      precio: 150.99,
      fecha: new Date()
    },
  ];

  seleccionar(curso) {
    console.log(curso);
  }
}
