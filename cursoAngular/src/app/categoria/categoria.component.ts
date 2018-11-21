import { Categoria } from './../models/categoria.model';
import { RemoteDataService } from './../services/remote-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {
  data: Observable<Array<Categoria>>;
  categorias: Array<Categoria>;
  categoria: Observable<Categoria>;


   contador = interval(2000);

  constructor(public remote: RemoteDataService) {}

  ngOnInit() {
    this.data = this.remote.getAllCategorias();
    this.data.subscribe(arrayData => {
      this.categorias = arrayData;
    }, err =>{
      console.log('Error ' + err);
    });

    // this.contador.subscribe(segundo =>{
    //   console.log(`Estamos en el segundo ${segundo} del interval`);
    // });
  }

  deleteCategoriaById(id) {
    this.remote.deleteCategoria(id).subscribe();
  }


}
