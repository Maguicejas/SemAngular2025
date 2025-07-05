import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyProductComponent } from './beauty-product.component';

describe('BeautyProductComponent', () => {
  let component: BeautyProductComponent;
  let fixture: ComponentFixture<BeautyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeautyProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
