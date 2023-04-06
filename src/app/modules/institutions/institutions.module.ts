import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRoutingModule } from './institutions-routing.module';
import { InstitutionsComponent } from './institutions.component';
import { AddEditInstitutionComponent } from './add-edit-institution/add-edit-institution.component';


@NgModule({
  declarations: [
    InstitutionsComponent,
    AddEditInstitutionComponent
  ],
  imports: [
    CommonModule,
    InstitutionsRoutingModule
  ]
})
export class InstitutionsModule { }
