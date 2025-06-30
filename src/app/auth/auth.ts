import { Injectable } from '@angular/core';
import {UserAuth} from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  public nombre: string = '';
  public username: string = '';
  public email: string = '';
  public role: string = '';
  public isLoged: boolean = false;

  public login (username: string, password: string): boolean {
    const usuarios: UserAuth[] = JSON.parse(<string>localStorage.getItem('usuarios')) || [];

    const userLogin: UserAuth | undefined = usuarios.find(u => u.userName === username && u.password === password);

    if (userLogin) {
      this.nombre = userLogin.userName;
      this.username = userLogin.userName;
      this.email = userLogin.email;
      this.role = userLogin.role;
      this.isLoged = true;
    }
    return this.isLoged;
  }

  public logout (): void {
    this.nombre = '';
    this.username = '';
    this.email = '';
    this.role = '';
    this.isLoged = false;
  }
}
