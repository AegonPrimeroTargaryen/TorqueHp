import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBar} from './nav-bar/nav-bar';
import {Footer} from './footer/footer';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { Login } from './login/login/login';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    NavBar,
    Footer,
    Login
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule
  ],
  exports: [
    NavBar,
    Footer,
    Login
  ]
})
export class SharedModule { }
