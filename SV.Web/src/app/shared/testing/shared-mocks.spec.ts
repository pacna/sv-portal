// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Self
import { CardsFilterRequest } from './../types/customs/cards-filter-request';
import { CardResponse } from './../types/api/card-response';
import { CardDescription } from './../types/customs/card-description';
import { CardDetailResponse } from './../types/api/card-detail-response';
import { FollowerDescription } from '../types/customs/follower-description';
import { Craft } from '../types/customs/craft.enum';
import { PageSuccessState } from '../types/customs/page-success-state.enum';

// https://stackoverflow.com/questions/41240163/mocking-child-components-angular-2
@Component({
  selector: 'top-nav',
  template: '',
})
export class MockTopNavComponent {}

@Component({
  selector: 'sv-layout',
  template: '',
})
export class MockSVLayoutComponent {}

@Component({
  selector: 'follower-description',
  template: '',
})
export class MockFollowerDescriptionComponent {
  @Input() cardDetail: CardDetailResponse;
}

@Component({
  selector: 'card-details-description',
  template: '',
})
export class MockCardDetailsDescriptionComponent {
  @Input() cardDetail: CardDetailResponse;
}

@Component({
  selector: 'card-description',
  template: '',
})
export class MockCardDescriptionComponent {
  @Input() cardDescription: CardDescription;
}

@Component({
  selector: 'follower-detail-description',
  template: '',
})
export class MockFollowerDetailDescriptionComponent {
  @Input() followerHeaderText: string = 'Base';
  @Input() followerDescription: FollowerDescription;
}

@Component({
  selector: 'header-action-bar',
  template: '',
})
export class MockHeaderActionBarComponent {}

@Component({
  selector: 'sv-list',
  template: '',
})
export class MockSVListComponent {
  @Input() cards: CardResponse[];
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

@Component({
  selector: 'card-details',
  template: '',
})
export class MockCardDetailsComponent {
  @Input() detail: CardDetailResponse;
}

@Component({
  selector: 'page-content',
  template: '',
})
export class MockPageContentComponent {
  @Input() pageState: PageSuccessState;
  pageSuccessState = PageSuccessState;
}
