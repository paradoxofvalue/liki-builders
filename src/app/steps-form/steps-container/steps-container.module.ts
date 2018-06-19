import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { StepsServiceService } from '../steps-service.service';
import { StepsAsideComponent } from './steps-aside/steps-aside.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StepsAsideComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  exports: [
    StepsAsideComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,

  ],
  providers: [
    StepsServiceService
  ]
})
export class StepsContainerModule { }
