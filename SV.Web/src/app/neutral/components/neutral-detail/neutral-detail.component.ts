/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'neutral-detail',
  template: `<base-detail [craftType]="neutralType"></base-detail>`,
})
export class NeutralDetailComponent {
  neutralType: Craft = Craft.neutral;
}
