import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPricingComponent } from './add-edit-pricing.component';

describe('AddEditPricingComponent', () => {
  let component: AddEditPricingComponent;
  let fixture: ComponentFixture<AddEditPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
