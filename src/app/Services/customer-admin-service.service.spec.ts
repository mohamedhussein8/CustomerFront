import { TestBed } from '@angular/core/testing';

import { CustomerAdminServiceService } from './customer-admin-service.service';

describe('CustomerAdminServiceService', () => {
  let service: CustomerAdminServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAdminServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
