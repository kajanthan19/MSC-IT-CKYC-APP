import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditConsumerGroupComponent } from './add-edit-consumer-group.component';

describe('AddEditConsumerGroupComponent', () => {
  let component: AddEditConsumerGroupComponent;
  let fixture: ComponentFixture<AddEditConsumerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditConsumerGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditConsumerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
