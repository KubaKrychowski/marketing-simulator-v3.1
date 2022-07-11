import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductCardComponent } from './add-product-card.component';

describe('AddProductCardComponent', () => {
  let component: AddProductCardComponent;
  let fixture: ComponentFixture<AddProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
