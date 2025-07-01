import { TestBed } from '@angular/core/testing';

import { Auth } from './auth';

describe('Auth', () => {
  let service: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login successfully', () => {
    const fakeUsers = [
      {
        userName: 'testuser',
        password: '1234',
        email: 'test@example.com',
        role: 'user'
      }
    ];
    localStorage.setItem('usuarios', JSON.stringify(fakeUsers));

    const result = service.login('testuser', '1234');
    expect(result).toBeTrue();
  });
});
