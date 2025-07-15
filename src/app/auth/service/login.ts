import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserAuth} from '../../interface/usuario';
import {Observable} from 'rxjs';
import {LoginRq} from '../../interface/login';

@Injectable({
  providedIn: 'root'
})
export class Login {

  private _http = inject(HttpClient)

  public login(login: LoginRq) : Observable<UserAuth> {
    return this._http.post<UserAuth>('http://localhost:8080/login', login);
  }

  public registro(user: UserAuth): Observable<Boolean> {
    return this._http.post<Boolean>('http://localhost:8080/registro', user);
  }
}
