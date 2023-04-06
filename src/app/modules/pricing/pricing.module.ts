import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from '../pricing/pricing.component';
import { AddEditPricingComponent } from './add-edit-pricing/add-edit-pricing.component';


@NgModule({
  declarations: [
    PricingComponent,
    AddEditPricingComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
