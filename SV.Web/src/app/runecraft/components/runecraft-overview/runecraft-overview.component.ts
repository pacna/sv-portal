// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'runecraft-overview',
  templateUrl: './runecraft-overview.component.html',
})
export class RunecraftOverviewComponent {
  runeCraftType: Craft = Craft.runecraft;
  constructor() {}
}
