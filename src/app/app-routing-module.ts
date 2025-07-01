import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from './home/page/home-page/home-page';
import {RegistroPage} from './registro/page/registro-page/registro-page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios-module')
      .then(m => m.ServiciosModule)
  },
  {
    path: 'registro',
    component: RegistroPage
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
