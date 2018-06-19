import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepsFormComponent } from './steps-form/steps-form.component';
import { StepsFormModule } from './steps-form/steps-form.module';

@NgModule({
  declarations: [
    AppComponent,
    StepsFormComponent,
  ],
  imports: [
    BrowserModule,
    StepsFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
