// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'swordcraft-overview',
  template: `<base-overview [craftType]="swordCraftType"></base-overview>`,
})
export class SwordcraftOverviewComponent {
  swordCraftType: Craft = Craft.swordcraft;
}
