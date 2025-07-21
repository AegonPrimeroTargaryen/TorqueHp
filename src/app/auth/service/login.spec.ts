import { TestBed } from '@angular/core/testing';

import { Login } from './login';
import {provideHttpClient} from '@angular/common/http';

describe('Login', () => {
  let service: Login;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(Login);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
