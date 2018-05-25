import { TestBed, inject } from '@angular/core/testing';

import { BillingService } from './billing.service';

describe('BillingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingService]
    });
  });

  it('should be created', inject([BillingService], (service: BillingService) => {
    expect(service).toBeTruthy();
  }));

  it('get and set page function should work', inject([BillingService], (service: BillingService) => {
    service.selectedTab = 'tab testing';
    expect(service.selectedTab).toBe('tab testing');
  }));
});
