import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APIManagementRoutingModule } from './apimanagement-routing.module';
import { APIManagementComponent } from '../apimanagement/apimanagement.component';


@NgModule({
  declarations: [
    APIManagementComponent
  ],
  imports: [
    CommonModule,
    APIManagementRoutingModule
  ]
})
export class APIManagementModule { }
