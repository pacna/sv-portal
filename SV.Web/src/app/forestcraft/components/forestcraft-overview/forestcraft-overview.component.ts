// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'forestcraft-overview',
  templateUrl: './forestcraft-overview.component.html',
})
export class ForestcraftOverviewComponent {
  forestCraftType: Craft = Craft.forestcraft;
  constructor() {}
}
