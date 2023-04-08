import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsManagementRoutingModule } from './projects-management-routing.module';
import { AddEditProjectComponent } from './add-edit-project/add-edit-project.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddEditProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsManagementRoutingModule,
    SharedModule
  ]
})
export class ProjectsManagementModule { }
