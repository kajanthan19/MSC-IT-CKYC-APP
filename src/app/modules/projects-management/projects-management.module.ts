import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsManagementRoutingModule } from './projects-management-routing.module';
import { AddEditProjectComponent } from './add-edit-project/add-edit-project.component';


@NgModule({
  declarations: [
    AddEditProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsManagementRoutingModule
  ]
})
export class ProjectsManagementModule { }
