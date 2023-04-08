import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalsRoutingModule } from './approvals-routing.module';
import { ApprovalsComponent } from '../approvals/approvals.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ApprovalsComponent
  ],
  imports: [
    CommonModule,
    ApprovalsRoutingModule,
    SharedModule
  ]
})
export class ApprovalsModule { }
