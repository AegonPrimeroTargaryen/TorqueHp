import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactenos } from './contactenos';

describe('Contactenos', () => {
  let component: Contactenos;
  let fixture: ComponentFixture<Contactenos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contactenos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactenos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
