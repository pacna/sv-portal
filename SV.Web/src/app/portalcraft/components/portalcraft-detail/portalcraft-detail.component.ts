/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'portalcraft-detail',
  templateUrl: './portalcraft-detail.component.html',
})
export class PortalcraftDetailComponent {
  portalCraftType: Craft = Craft.portalcraft;
  constructor() {}
}
