import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditConsumerComponent } from './add-edit-consumer.component';

describe('AddEditConsumerComponent', () => {
  let component: AddEditConsumerComponent;
  let fixture: ComponentFixture<AddEditConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
