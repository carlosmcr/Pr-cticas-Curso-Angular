import { Categoria } from './../models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RemoteDataService } from './../services/remote-data.service';


@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styles: []
})
export class FormDemoComponent implements OnInit {

  public categoria: Categoria;

  constructor(public remote: RemoteDataService) {
    this.categoria = new Categoria();
  }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm) {
    this.remote.createCategoria(this.categoria).subscribe();
  }

  limpiar(formulario: NgForm) {
    formulario.reset();
  }
}
