import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { StepsServiceService } from '../steps-service.service';
import { StepsAsideComponent } from './steps-aside/steps-aside.component';
import { RequestService } from '../request.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotoUploaderComponent } from './photo-uploader/photo-uploader.component';

import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
  ],
  declarations: [
    StepsAsideComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    PhotoUploaderComponent
  ],
  exports: [
    StepsAsideComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    PhotoUploaderComponent,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
  ],
  providers: [
    StepsServiceService,
    RequestService,
    MatDatepickerModule,
    MatMomentDateModule,
  ]
})
export class StepsContainerModule { }
