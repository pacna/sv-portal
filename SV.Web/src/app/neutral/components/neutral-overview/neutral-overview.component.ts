// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'neutral-overview',
  template: `<base-overview [craftType]="neutralType"></base-overview>`,
})
export class NeutralOverviewComponent {
  neutralType: Craft = Craft.neutral;
}
