import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessManagementRoutingModule } from './access-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { RoleaccessComponent } from './roleaccess/roleaccess.component';


@NgModule({
  declarations: [
    UserComponent,
    RoleComponent,
    RoleaccessComponent
  ],
  imports: [
    CommonModule,
    AccessManagementRoutingModule,
    SharedModule
  ]
})
export class AccessManagementModule { }
