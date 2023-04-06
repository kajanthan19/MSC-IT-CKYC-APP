import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerGroupComponent } from './consumer-group.component';

const routes: Routes = [
  {
    path: '', 
    component: ConsumerGroupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerGroupRoutingModule { }
