import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StepsContainerComponent } from './steps-container/steps-container.component';
import { StepsContainerModule } from './steps-container/steps-container.module';
import { StepsServiceService } from './steps-service.service';
import { RequestService } from './request.service';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    StepsContainerModule,
    HttpClientModule,

  ],
  declarations: [
    StepsContainerComponent,
  ],
  exports: [
    StepsContainerComponent,

  ],
  providers: [
    StepsServiceService,
    RequestService
  ]
})

export class StepsFormModule { 
  
}
