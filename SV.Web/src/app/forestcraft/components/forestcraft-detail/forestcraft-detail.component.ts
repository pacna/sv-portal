/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'forestcraft-detail',
  template: `<base-detail [craftType]="forestCraftType"></base-detail>`,
})
export class ForestcraftDetailComponent {
  forestCraftType: Craft = Craft.forestcraft;
}
