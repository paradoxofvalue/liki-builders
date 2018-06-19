import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { stepsDefault } from './steps-default';

@Injectable()
export class StepsServiceService {

  steps = stepsDefault;
  stepSource = new BehaviorSubject('one');  
  value = this.stepSource.asObservable();

  constructor() { }

  getCurrentStep() {
    this.stepSource.next(this.stepSource.value);
  }

  nextStep() {
    this.stepSource.next(this.steps[this.steps.indexOf(this.stepSource.value) + 1])
  }

  prevStep() {
    this.stepSource.next(this.steps[this.steps.indexOf(this.stepSource.value) - 1])
  }
}
