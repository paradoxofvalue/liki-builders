import { Component, OnInit } from '@angular/core';
import { StepsServiceService } from '../steps-service.service';

@Component({
  selector: 'app-steps-container',
  templateUrl: './steps-container.component.html',
  styleUrls: ['./steps-container.component.css'],
  providers: [
    StepsServiceService
  ]
})
export class StepsContainerComponent implements OnInit {

  currentStep: string;

  constructor(private stepsService: StepsServiceService) {
  }

  ngOnInit() {
    this.stepsService.value.subscribe(value => this.currentStep = value);
  }

  prev() {
    this.stepsService.prevStep();
  }

  next() {
    this.stepsService.nextStep();
  }
}
