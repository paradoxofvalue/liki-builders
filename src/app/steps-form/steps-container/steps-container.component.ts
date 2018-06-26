import { Component, OnInit } from '@angular/core';
import { StepsServiceService } from '../steps-service.service';
import { RequestService } from '../request.service';
import { BuildingComplex } from './building-complex';

@Component({
  selector: 'app-steps-container',
  templateUrl: './steps-container.component.html',
  styleUrls: ['./steps-container.component.css'],
  providers: [
    StepsServiceService,
    RequestService
  ]
})
export class StepsContainerComponent implements OnInit {

  currentStep: string;
  buildingComplex: BuildingComplex;

  constructor(private stepsService: StepsServiceService, private http: RequestService) {
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