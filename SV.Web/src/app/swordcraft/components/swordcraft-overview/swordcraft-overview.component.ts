// Angular
import { Component } from '@angular/core';
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'swordcraft-overview',
  templateUrl: './swordcraft-overview.component.html',
})
export class SwordcraftOverviewComponent {
  swordCraftType: Craft = Craft.swordcraft;
  constructor() {}
}
