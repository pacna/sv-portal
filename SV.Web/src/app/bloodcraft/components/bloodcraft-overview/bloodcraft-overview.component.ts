// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'bloodcraft-overview',
  template: `<base-overview [craftType]="bloodCraftType"></base-overview>`,
})
export class BloodcraftOverviewComponent {
  bloodCraftType: Craft = Craft.bloodcraft;
}
