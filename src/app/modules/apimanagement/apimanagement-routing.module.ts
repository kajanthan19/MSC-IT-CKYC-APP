import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIManagementComponent } from './apimanagement.component';

const routes: Routes = [
  {
    path: '', 
    component: APIManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class APIManagementRoutingModule { }
