import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerGroupRoutingModule } from './consumer-group-routing.module';
import { AddEditConsumerGroupComponent } from './add-edit-consumer-group/add-edit-consumer-group.component';


@NgModule({
  declarations: [
    AddEditConsumerGroupComponent
  ],
  imports: [
    CommonModule,
    ConsumerGroupRoutingModule
  ]
})
export class ConsumerGroupModule { }
