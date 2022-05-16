// Angular
import { TestBed } from '@angular/core/testing';

// Self
import { CardManagementEventService } from './card-management-event.service';

describe('CardManagementEventService', () => {
  let service: CardManagementEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardManagementEventService],
    });
    service = TestBed.inject(CardManagementEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
