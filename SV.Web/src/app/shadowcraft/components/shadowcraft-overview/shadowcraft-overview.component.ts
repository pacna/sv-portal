// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'shadowcraft-overview',
  template: `<base-overview [craftType]="shadowCraftType"></base-overview>`,
})
export class ShadowcraftOverviewComponent {
  shadowCraftType: Craft = Craft.shadowcraft;
}
