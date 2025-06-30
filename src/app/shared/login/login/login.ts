import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Auth} from '../../../auth/auth';

@Component({
  selector: 'shared-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  loginForm!: FormGroup;

  @ViewChild('formLogin') miLogin!: ElementRef;
  @Output() loginEvent: EventEmitter<void> = new EventEmitter();

  constructor(private auth: Auth, private fb: FormBuilder, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submitForm(): void {
    const username: string = this.loginForm.getRawValue().username;
    const pass: string = this.loginForm.getRawValue().password;

    if (!this.loginForm.valid || !this.auth.login(username, pass)) {
      this.loginEvent.emit();
      this.renderer.addClass(this.miLogin.nativeElement, 'show');
      this.renderer.setAttribute(this.miLogin.nativeElement, "data-bs-popper","none");
      alert('Usuario y/o contraseña invalidas');
    }
  }
}
