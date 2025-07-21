import { TestBed } from '@angular/core/testing';

import { ServiciosService } from './servicios-service';
import {provideHttpClient} from '@angular/common/http';

describe('ServiciosService', () => {
  let service: ServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(ServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
