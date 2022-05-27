import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCategoryListComponent } from './product-category-list.component';


describe('ProductCategoryComponent', () => {
  let component: ProductCategoryListComponent;
  let fixture: ComponentFixture<ProductCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  });
});
