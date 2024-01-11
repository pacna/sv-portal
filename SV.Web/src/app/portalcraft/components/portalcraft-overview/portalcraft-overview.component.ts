// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'portalcraft-overview',
  template: `<base-overview [craftType]="portalCraftType"></base-overview>`,
})
export class PortalcraftOverviewComponent {
  portalCraftType: Craft = Craft.portalcraft;
}
