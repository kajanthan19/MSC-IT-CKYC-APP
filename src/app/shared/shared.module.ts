import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { DeleteComponent } from './delete/delete.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: "rgba(255,255,255,0.3)",
      backdropBorderRadius: "4px",
      primaryColour: "#082c4c",
      secondaryColour: "#082c4c",
      tertiaryColour: "#082c4c",
    }),
    NgxBootstrapIconsModule.pick(allIcons),
    NgSelectModule
  ],
  providers:[DatePipe],
  exports:[ 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    BsDatepickerModule,
    NgxLoadingModule,
    NgSelectModule
  ],
  entryComponents:[DeleteComponent]
})
export class SharedModule { }
