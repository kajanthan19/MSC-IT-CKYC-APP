import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APIManagementRoutingModule } from './apimanagement-routing.module';
import { APIManagementComponent } from '../apimanagement/apimanagement.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    APIManagementComponent
  ],
  imports: [
    CommonModule,
    APIManagementRoutingModule,
    SharedModule
  ]
})
export class APIManagementModule { }
