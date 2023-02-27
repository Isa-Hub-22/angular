import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMyListComponent } from './product-my-list.component';

describe('ProductMyListComponent', () => {
  let component: ProductMyListComponent;
  let fixture: ComponentFixture<ProductMyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
