import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing-module';
import { ServiciosHome } from './page/servicios-home/servicios-home';
import { Card } from './component/card/card';


@NgModule({
  declarations: [
      ServiciosHome,
      Card
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
