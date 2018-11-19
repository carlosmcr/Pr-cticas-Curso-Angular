import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MultiplicadorPipe} from './app.MultiplicadorPipe';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicadorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
