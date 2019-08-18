import {inject, TestBed} from '@angular/core/testing';

import {MoistureDataService} from './moisture-data.service';

describe('TemperatureDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoistureDataService]
    });
  });

  it('should ...', inject([MoistureDataService], (service: MoistureDataService) => {
    expect(service).toBeTruthy();
  }));
});
