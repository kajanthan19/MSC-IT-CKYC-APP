import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsManagementComponent } from './projects-management.component';

const routes: Routes = [
  {
    path: '', 
    component: ProjectsManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsManagementRoutingModule { }
