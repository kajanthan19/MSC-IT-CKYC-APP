import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumersRoutingModule } from './consumers-routing.module';
import { ConsumersComponent } from './consumers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AddEditConsumerComponent } from './add-edit-consumer/add-edit-consumer.component';


@NgModule({
  declarations: [
    ConsumersComponent,
    AddEditConsumerComponent
  ],
  imports: [
    CommonModule,
    ConsumersRoutingModule,
    SharedModule
  ]
})
export class ConsumersModule { }
