import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from '../pricing/pricing.component';
import { AddEditPricingComponent } from './add-edit-pricing/add-edit-pricing.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PricingComponent,
    AddEditPricingComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule,
    SharedModule
  ]
})
export class PricingModule { }
