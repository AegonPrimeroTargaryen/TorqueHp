import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [ReactiveFormsModule, FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form corerectly', () => {
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should set param form', () => {
    component.loginForm.patchValue({username: 'usuario', password: '123'});
    expect(component.loginForm.valid).toBeTruthy();
  });
});
