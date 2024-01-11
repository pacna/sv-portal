/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'havencraft-detail',
  template: `<base-detail [craftType]="havenCraftType"></base-detail>`,
})
export class HavencraftDetailComponent {
  havenCraftType: Craft = Craft.havencraft;
}
