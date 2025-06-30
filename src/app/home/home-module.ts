import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePage} from './page/home-page/home-page';
import { Carrusel } from './component/carrusel/carrusel';
import { Contactenos } from './component/contactenos/contactenos';



@NgModule({
  declarations: [
    HomePage,
    Carrusel,
    Contactenos
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePage,
    Carrusel,
    Contactenos
  ]
})
export class HomeModule { }
