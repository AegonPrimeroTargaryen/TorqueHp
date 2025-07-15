import {Component, inject, OnInit} from '@angular/core';
import {CardImagen} from '../../../interface/card';
import {HttpClient} from '@angular/common/http';
import {ServiciosService} from '../../service/servicios-service';

@Component({
  selector: 'app-servicios-home',
  standalone: false,
  templateUrl: './servicios-home.html',
  styleUrl: './servicios-home.css'
})
export class ServiciosHome implements OnInit {

  private _serviciosService: ServiciosService = inject(ServiciosService);

  private cardImagens: CardImagen[] = [];

  private _imagenes: CardImagen[] = [
    // {
    //   titulo: 'Mantencion',
    //   imagenUrl: 'assets/img/mantencion.png',
    //   altr: 'mantencion'
    // },
    // {
    //   titulo: 'Performance',
    //   imagenUrl: 'assets/img/performance.png',
    //   altr: 'performance'
    // },
    // {
    //   titulo: 'Pintura',
    //   imagenUrl: 'assets/img/pintura.png',
    //   altr: 'pintura'
    // }
  ];

  ngOnInit() {
    this._serviciosService.servicios().subscribe((servicios: CardImagen[]) => {
      this.cardImagens = servicios;
    })
  }
  get imagenes(): CardImagen[] {
    return [...this.cardImagens];
  }
}
