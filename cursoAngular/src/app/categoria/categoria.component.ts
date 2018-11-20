import { Categoria } from './../models/categoria.model';
import { RemoteDataService } from './../services/remote-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {
  data: Observable<Array<Categoria>>;
  categorias: Array<Categoria>;

  constructor(public remote: RemoteDataService) {}

  ngOnInit() {
    this.data = this.remote.retornarData();
    this.data.subscribe(arrayData => {
      this.categorias = arrayData;
    });
  }
}
