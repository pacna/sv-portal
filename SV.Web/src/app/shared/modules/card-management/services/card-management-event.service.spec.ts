import { TestBed } from '@angular/core/testing';

import { CardManagementEventService } from './card-management-event.service';

describe('CardManagementEventService', () => {
  let service: CardManagementEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardManagementEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
