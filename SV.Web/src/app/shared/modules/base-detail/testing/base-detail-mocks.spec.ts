// Angular
import { Component, Input } from '@angular/core';

// Shared
import { CardDetailResponse } from '../../../types/api';

// Self
import { CardDescription } from '../types/card-description';

@Component({
  selector: 'card-details',
  template: '',
})
export class MockCardDetailsComponent {
  @Input() detail: CardDetailResponse;
}

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
