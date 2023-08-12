// Angular
import { Component } from '@angular/core';
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'portalcraft-overview',
  templateUrl: './portalcraft-overview.component.html',
})
export class PortalcraftOverviewComponent {
  portalCraftType: Craft = Craft.portalcraft;
  constructor() {}
}
