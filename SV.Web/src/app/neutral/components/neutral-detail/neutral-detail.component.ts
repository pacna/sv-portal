/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'neutral-detail',
  templateUrl: './neutral-detail.component.html',
})
export class NeutralDetailComponent {
  neutralType: Craft = Craft.neutral;
  constructor() {}
}
