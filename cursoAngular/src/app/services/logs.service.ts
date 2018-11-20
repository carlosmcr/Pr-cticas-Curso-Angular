import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  constructor() {}

  escribirTrazaLog(...mensaje: string[]) {
    mensaje.forEach(msg => {
      console.log(msg);
    });
  }
  escribirTrazaWarn(...mensaje: string[]) {
    mensaje.forEach(msg => {
      console.warn(msg);
    });
  }
  escribirTrazaError(...mensaje: string[]) {
    mensaje.forEach(msg => {
      console.error(msg);
    });
  }
}
