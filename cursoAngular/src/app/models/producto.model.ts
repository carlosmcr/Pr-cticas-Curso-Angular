import { Categoria } from './categoria.model';

export interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: Categoria;
}

