import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserAuth} from '../../../interface/usuario';
import {Router} from '@angular/router';
import {Login} from '../../../auth/service/login';

@Component({
  selector: 'registro-formulario',
  standalone: false,
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario implements OnInit {
  private _loginService: Login = inject(Login);

  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passRepi: ['', Validators.required],
    });
  }

  submitRegistro(): void {
    if (this.registroForm.invalid) {
      alert('Error al ingresar información');
    } else if (this.registroForm.value.password !== this.registroForm.value.passRepi) {
      alert('Contraseñas no sin iguales');
    } else {
      const newUser: UserAuth = {
        nombre: this.registroForm.value.nombre,
        userName: this.registroForm.value.username,
        password: this.registroForm.value.password,
        email: this.registroForm.value.email,
        role: "",
      };
      this._loginService.registro(newUser).subscribe(res => {
        if (!res) alert('Usuario ya existe, intente con otro');
        else {
          alert('Usuario creado');
          this.router.navigate(['/home']);
        }
      });
    }
  }

  limpiarFomr(): void{
    this.registroForm.reset({
      nombre: '',
      username: '',
      email: '',
      password: '',
      passRepi: '',
    });
  }
}
