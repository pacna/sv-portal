// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'swordcraft-overview',
  templateUrl: './swordcraft-overview.component.html',
})
export class SwordcraftOverviewComponent {
  swordCraftType: Craft = Craft.swordcraft;
  constructor() {}
}
