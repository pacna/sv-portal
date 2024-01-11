// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'dragoncraft-overview',
  template: '<base-overview [craftType]="dragonCraftType"></base-overview>',
})
export class DragoncraftOverviewComponent {
  dragonCraftType: Craft = Craft.dragoncraft;
}
