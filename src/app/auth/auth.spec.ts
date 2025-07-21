import { TestBed } from '@angular/core/testing';

import { Auth } from './auth';
import {provideHttpClient} from '@angular/common/http';

describe('Auth', () => {
  let service: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(Auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login Failed', async () => {
    const fakeUsers = [
      {
        userName: 'testuser',
        password: '1234',
        email: 'test@example.com',
        role: 'user'
      }
    ];
    localStorage.setItem('usuarios', JSON.stringify(fakeUsers));

    const result: boolean = await service.login('testuser', '1234');
    expect(result).toBeFalse();
  });
});
