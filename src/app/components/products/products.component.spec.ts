import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  /* const serviceMock = () => ({
    getAllSimple: () => ({
      subscribe: (f: any) =>
        f({
          data: ['asdsad'],
        }),
    }),
  }); */

  const serviceMock = {
    getAllSimple: () => of(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        {
          provide: ProductsService,
          useValue: serviceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
