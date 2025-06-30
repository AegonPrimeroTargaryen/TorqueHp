import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {Auth} from '../../auth/auth';

@Component({
  selector: 'shared-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  @ViewChild('navBarA') navBar!: ElementRef;

  constructor(protected auth: Auth, private renderer: Renderer2) {
  }

  loginEvent(): void{
    this.renderer.setAttribute(this.navBar.nativeElement, 'aria-expanded', 'true');
    this.renderer.addClass(this.navBar.nativeElement, 'show');
  }
}
