import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIManagementComponent } from './apimanagement.component';

describe('APIManagementComponent', () => {
  let component: APIManagementComponent;
  let fixture: ComponentFixture<APIManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
