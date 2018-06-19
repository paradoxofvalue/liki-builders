import { Component, OnInit } from '@angular/core';
import { StepsServiceService } from './steps-service.service'


@Component({
  selector: 'steps-form',
  templateUrl: './steps-form.component.html',
  styleUrls: ['./steps-form.component.css'],
  providers: [
    StepsServiceService
  ]
})
export class StepsFormComponent implements OnInit {
  constructor(private stepsService: StepsServiceService) {
  }

  ngOnInit() {
  }
}
