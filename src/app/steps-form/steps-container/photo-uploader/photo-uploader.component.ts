import { Component, OnInit, Input } from '@angular/core';
import { Photo } from './photo';
import { FormControl } from '@angular/forms';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.css'],
  providers: [
    // { provide: DateAdapter, useClass: MatMomentDateModule, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class PhotoUploaderComponent implements OnInit {

  @Input() photos: Photo[];

  constructor() { }

  ngOnInit() {
  }

  date = new FormControl(moment().format());

}
