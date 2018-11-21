import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './../models/categoria.model';


@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  url: string = 'http://localhost:8082/categoria';

  constructor(public httpClient: HttpClient) {}

  getAllCategorias() {
    return this.httpClient.get<Array<Categoria>>(this.url);
  }
  getCategoriaById(id) {
    return this.httpClient.get<Categoria>(this.url + '/' + id);
  }
  createCategoria(categoria) {
    return this.httpClient.post<Categoria>(this.url,  categoria);
  }
  deleteCategoria(id) {
    return  this.httpClient.delete<String>(this.url + '/' + id);
  }

}
