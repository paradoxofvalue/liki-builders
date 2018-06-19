import { TestBed, inject } from '@angular/core/testing';

import { StepsServiceService } from './steps-service.service';

describe('StepsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StepsServiceService]
    });
  });

  it('should be created', inject([StepsServiceService], (service: StepsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
