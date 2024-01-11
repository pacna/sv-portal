// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'forestcraft-overview',
  template: `<base-overview [craftType]="forestCraftType"></base-overview>`,
})
export class ForestcraftOverviewComponent {
  forestCraftType: Craft = Craft.forestcraft;
}
