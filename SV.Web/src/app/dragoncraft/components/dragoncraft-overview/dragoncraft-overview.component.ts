// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'dragoncraft-overview',
  templateUrl: './dragoncraft-overview.component.html',
})
export class DragoncraftOverviewComponent {
  dragonCraftType: Craft = Craft.dragoncraft;
  constructor() {}
}
