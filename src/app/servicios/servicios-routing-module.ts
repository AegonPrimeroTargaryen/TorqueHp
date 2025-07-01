import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiciosHome} from './page/servicios-home/servicios-home';

const routes: Routes = [
  {
    path: '',
    component: ServiciosHome
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
