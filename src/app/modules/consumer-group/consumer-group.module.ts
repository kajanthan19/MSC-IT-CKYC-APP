import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerGroupRoutingModule } from './consumer-group-routing.module';
import { AddEditConsumerGroupComponent } from './add-edit-consumer-group/add-edit-consumer-group.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConsumerGroupComponent } from './consumer-group.component';


@NgModule({
  declarations: [
    ConsumerGroupComponent,
    AddEditConsumerGroupComponent
  ],
  imports: [
    CommonModule,
    ConsumerGroupRoutingModule,
    SharedModule
  ]
})
export class ConsumerGroupModule { }
