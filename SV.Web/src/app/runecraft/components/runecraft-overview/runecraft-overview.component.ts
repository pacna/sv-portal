// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'runecraft-overview',
  template: `<base-overview [craftType]="runeCraftType"></base-overview>`,
})
export class RunecraftOverviewComponent {
  runeCraftType: Craft = Craft.runecraft;
}
