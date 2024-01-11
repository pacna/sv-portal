// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'bloodcraft-detail',
  template: `<base-detail [craftType]="bloodCraftType"></base-detail>`,
})
export class BloodcraftDetailComponent {
  bloodCraftType: Craft = Craft.bloodcraft;
}
