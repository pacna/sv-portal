/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'portalcraft-detail',
  template: `<base-detail [craftType]="portalCraftType"></base-detail>`,
})
export class PortalcraftDetailComponent {
  portalCraftType: Craft = Craft.portalcraft;
}
