import { Component } from '@angular/core';
import {UserAuth} from './interface/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  constructor() {
    const usuarios: UserAuth[] = JSON.parse(<string>localStorage.getItem('usuarios')) || [];

    if(!usuarios.some(u => u.userName === 'admin')){
      const admin: UserAuth = {
        userName: 'admin',
        email: 'admin@correo.cl',
        role: 'admin',
        password: '123456',
        nombre: 'Administrador'
      }
      usuarios.push(admin);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
  }
}
