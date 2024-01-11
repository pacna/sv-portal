/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'runecraft-detail',
  template: `<base-detail [craftType]="runeCraftType"></base-detail>`,
})
export class RunecraftDetailComponent {
  runeCraftType: Craft = Craft.runecraft;
}
