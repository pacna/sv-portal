import { TestBed } from '@angular/core/testing';

import { CardEditEventService } from './card-edit-event.service';

describe('CardEditEventService', () => {
  let service: CardEditEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardEditEventService],
    });
    service = TestBed.inject(CardEditEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
