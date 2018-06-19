import { Component, OnInit, Input } from '@angular/core';
import { stepsDefault } from '../../steps-default';
import { StepsServiceService } from '../../steps-service.service';

@Component({
  selector: 'app-steps-aside',
  templateUrl: './steps-aside.component.html',
  styleUrls: ['./steps-aside.component.css'],
  providers: [
    StepsServiceService
  ]
})
export class StepsAsideComponent implements OnInit {

  @Input() currentStep: string;
  steps = stepsDefault;
  
  constructor(public stepsService: StepsServiceService) {
    stepsService.value.subscribe(value => this.currentStep = value);
  }

  ngOnInit() {
    this.stepsService.value.subscribe(value => this.currentStep = value);
  }
}
