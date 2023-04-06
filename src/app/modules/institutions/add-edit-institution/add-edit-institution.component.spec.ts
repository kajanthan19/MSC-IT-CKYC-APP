import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInstitutionComponent } from './add-edit-institution.component';

describe('AddEditInstitutionComponent', () => {
  let component: AddEditInstitutionComponent;
  let fixture: ComponentFixture<AddEditInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
