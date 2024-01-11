// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'havencraft-overview',
  template: `<base-overview [craftType]="havenCraftType"></base-overview>`,
})
export class HavencraftOverviewComponent {
  havenCraftType: Craft = Craft.havencraft;
}
