// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'shadowcraft-overview',
  templateUrl: './shadowcraft-overview.component.html',
})
export class ShadowcraftOverviewComponent {
  shadowCraftType: Craft = Craft.shadowcraft;
  constructor() {}
}
