// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'havencraft-overview',
  templateUrl: './havencraft-overview.component.html',
})
export class HavencraftOverviewComponent {
  havenCraftType: Craft = Craft.havencraft;
  constructor() {}
}
