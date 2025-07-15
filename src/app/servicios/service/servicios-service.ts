import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CardImagen} from '../../interface/card';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private  _http: HttpClient = inject(HttpClient);

  public servicios(): Observable<CardImagen[]> {
    return this._http.get<CardImagen[]>("http://localhost:8080/servicios");
  }
}
