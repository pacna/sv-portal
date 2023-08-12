// Angular
import { Component } from '@angular/core';
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'neutral-overview',
  templateUrl: './neutral-overview.component.html',
})
export class NeutralOverviewComponent {
  neutralType: Craft = Craft.neutral;
  constructor() {}
}
