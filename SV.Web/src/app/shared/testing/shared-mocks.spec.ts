import { CardDescription } from './../types/customs/card-description';
import { CardDetailResponse } from './../types/api/card-detail-response';
import { Component, Input } from '@angular/core';

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
