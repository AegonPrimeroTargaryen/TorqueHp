import {inject, Injectable} from '@angular/core';
import {UserAuth} from '../interface/usuario';
import {LoginRq} from '../interface/login';
import {HttpClient} from '@angular/common/http';
import {Login} from './service/login';
import {firstValueFrom} from 'rxjs';

/**
 * @description
 * Servicio que se encarga de cargar la información del usuario legeado
 * o el cual se quiera logear en el aplicativo para compartir e inyectar
 * clase con el fin de tener login de usuario unificado en este servicio
 */
@Injectable({
  providedIn: 'root'
})
export class Auth {
  private _loginService: Login = inject(Login);

  public nombre: string = '';
  public username: string = '';
  public email: string = '';
  public role: string = '';
  public isLoged: boolean = false;

  constructor() {
    const userSesion: UserAuth = JSON.parse(<string> localStorage.getItem('sesion'));
    if (userSesion) this.initSesion(userSesion);
  }

  /**
   * Login de usuarios
   * @param username Nombre de usuario el cual se quiere logear
   * @param password Password de la cuenta de usuario
   * @returns boolean Respuesta del intento de autenticación del usuario
   */
  public async login(username: string, password: string): Promise<boolean> {
    // const usuarios: UserAuth[] = JSON.parse(<string>localStorage.getItem('usuarios')) || [];
    //
    // const userLogin: UserAuth | undefined = usuarios.find(u => u.userName === username && u.password === password);
    const userLogin: LoginRq = {
      username: username,
      password: password,
    }

    const res: UserAuth = await firstValueFrom(this._loginService.login(userLogin));

    if (res) {
      const userLoged: UserAuth = {
        nombre: res.userName,
        userName: res.userName,
        email: res.email,
        role: res.role,
      };

      this.initSesion(userLoged);
      localStorage.setItem('sesion', JSON.stringify(userLoged));
    }

    return this.isLoged;
  }

  /**
   * @description
   * Metodo para lipiar localstorage de la sesion
   */
  public logout (): void {
    localStorage.removeItem('sesion');
    this.cleanSesion();
  }

  /**
   * Metodo para iniciar sesion
   * @param userLoged Objeto con los datos del usuario a logear
   * @protected
   */
  protected initSesion(userLoged: UserAuth): void {
    this.nombre = userLoged.nombre;
    this.username = userLoged.userName;
    this.email = userLoged.email;
    this.role = userLoged.role;
    this.isLoged = true;
  }

  /**
   * Metodo encargado de limpiar propiedades del servicio Auth
   * @protected
   */
  protected cleanSesion(): void {
    this.nombre = '';
    this.username = '';
    this.email = '';
    this.role = '';
    this.isLoged = false;
  }
}
