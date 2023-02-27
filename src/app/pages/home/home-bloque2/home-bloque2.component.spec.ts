import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBloque2Component } from './home-bloque2.component';

describe('HomeBloque2Component', () => {
  let component: HomeBloque2Component;
  let fixture: ComponentFixture<HomeBloque2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBloque2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBloque2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
