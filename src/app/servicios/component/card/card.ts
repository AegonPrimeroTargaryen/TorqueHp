import {Component, Input} from '@angular/core';
import {CardImagen} from '../../../interface/card';

@Component({
  selector: 'servicios-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  @Input()
  public imagen: CardImagen = {
    titulo:'',
    imagenUrl:'',
    altr:'',
  }
}
