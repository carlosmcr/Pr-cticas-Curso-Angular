import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './../models/categoria.model';


@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {
  constructor(public httpClient: HttpClient) {}
  retornarData() {
    return this.httpClient.get<Array<Categoria>>('http://localhost:8082/categoria');

  }
}
