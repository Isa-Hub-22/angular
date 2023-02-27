import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBloque1Component } from './home-bloque1.component';

describe('HomeBloque1Component', () => {
  let component: HomeBloque1Component;
  let fixture: ComponentFixture<HomeBloque1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBloque1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBloque1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
