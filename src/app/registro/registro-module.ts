import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroPage } from './page/registro-page/registro-page';
import { Formulario } from './component/formulario/formulario';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RegistroPage,
    Formulario
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistroPage,
    Formulario
  ]
})
export class RegistroModule { }
