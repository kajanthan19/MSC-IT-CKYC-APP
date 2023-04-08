import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessManagementRoutingModule } from './access-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccessManagementRoutingModule,
    SharedModule
  ]
})
export class AccessManagementModule { }
