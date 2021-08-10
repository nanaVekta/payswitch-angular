import { TestBed } from '@angular/core/testing';

import { PayswitchAngularService } from './payswitch-angular.service';

describe('PayswitchAngularService', () => {
  let service: PayswitchAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayswitchAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
