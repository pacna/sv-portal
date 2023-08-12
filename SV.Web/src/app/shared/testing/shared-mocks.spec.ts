// Angular
import { Component, Input } from '@angular/core';

// Self
import { CardDescription } from './../types/customs/card-description';
import { CardDetailResponse } from './../types/api/card-detail-response';
import { PageSuccessState } from '../types/customs/page-success-state.enum';

// https://stackoverflow.com/questions/41240163/mocking-child-components-angular-2

@Component({
  selector: 'follower-description',
  template: '',
})
export class MockFollowerDescriptionComponent {
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
  selector: 'header-action-bar',
  template: '',
})
export class MockHeaderActionBarComponent {}

@Component({
  selector: 'page-content',
  template: '',
})
export class MockPageContentComponent {
  @Input() pageState: PageSuccessState;
  pageSuccessState = PageSuccessState;
}

@Component({
  selector: 'card-details',
  template: '',
})
export class MockCardDetailsComponent {
  @Input() detail: CardDetailResponse;
}
