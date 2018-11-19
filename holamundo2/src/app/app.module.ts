import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent1 } from './app.componente1';

@NgModule({
  declarations: [
    AppComponent1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent1]
})
export class AppModule { }
