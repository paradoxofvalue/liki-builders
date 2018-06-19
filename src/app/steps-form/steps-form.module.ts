import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsContainerComponent } from './steps-container/steps-container.component';
import { StepsContainerModule } from './steps-container/steps-container.module';
import { StepsServiceService } from './steps-service.service';


@NgModule({
  imports: [
    CommonModule,
    StepsContainerModule,
  ],
  declarations: [
    StepsContainerComponent,
  ],
  exports: [
    StepsContainerComponent
  ],
  providers: [
    StepsServiceService
  ]
})

export class StepsFormModule { 
  
}
