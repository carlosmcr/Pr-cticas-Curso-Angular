import { LogsService } from './../services/logs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracer',
  templateUrl: './tracer.component.html',
  styles: []
})
export class TracerComponent implements OnInit {
  constructor(public servicio: LogsService) {
    servicio.escribirTrazaLog('Estoy en el constructor', 'Esto es un log');
    servicio.escribirTrazaWarn('Estoy en el constructor', 'Esto es un warn');
    servicio.escribirTrazaError('Estoy en el constructor', 'Esto es un error');
  }

  ngOnInit() {
    this.servicio.escribirTrazaLog('En el onInit', 'Es esto lo que pides?');
  }
}
