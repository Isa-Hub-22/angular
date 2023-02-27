import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBloque3Component } from './home-bloque3.component';

describe('HomeBloque3Component', () => {
  let component: HomeBloque3Component;
  let fixture: ComponentFixture<HomeBloque3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBloque3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBloque3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
