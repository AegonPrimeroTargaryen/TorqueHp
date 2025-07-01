import { Component } from '@angular/core';
import {CardImagen} from '../../../interface/card';

@Component({
  selector: 'app-servicios-home',
  standalone: false,
  templateUrl: './servicios-home.html',
  styleUrl: './servicios-home.css'
})
export class ServiciosHome {
  private _imagenes: CardImagen[] = [
    {
      titulo: 'Mantencion',
      imagenUrl: 'assets/img/mantencion.png',
      altr: 'mantencion'
    },
    {
      titulo: 'Performance',
      imagenUrl: 'assets/img/performance.png',
      altr: 'performance'
    },
    {
      titulo: 'Pintura',
      imagenUrl: 'assets/img/pintura.png',
      altr: 'pintura'
    }
  ];

  get imagenes(): CardImagen[] {
    return [...this._imagenes];
  }
}
