import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardResponse, Craft } from '../../../types';
import { CardsFilterRequest } from '../types/cards-filter-request';

@Component({
  selector: 'sv-list',
  template: '',
})
export class MockSVListComponent {
  @Input() cards: CardResponse[];
  @Input() numberOfColumns: number = 4;
}

@Component({
  selector: 'cards-filter-search',
  template: '',
})
export class MockCardsFilterSearchComponent {
  @Input() headerCraftType: Craft;
  @Input() currentFilterRequest: CardsFilterRequest;
  @Output() changeSearchFilter: EventEmitter<CardsFilterRequest> =
    new EventEmitter<CardsFilterRequest>();
}
