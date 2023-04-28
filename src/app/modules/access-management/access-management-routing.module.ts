import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessManagementComponent } from './access-management.component';
import { RoleComponent } from './role/role.component';
import { RoleaccessComponent } from './roleaccess/roleaccess.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', 
    component: AccessManagementComponent,
    children: [
      { path: '', component: UserComponent },
      { path: 'roles', component: RoleComponent },
      { path: 'access', component: RoleaccessComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessManagementRoutingModule { }
