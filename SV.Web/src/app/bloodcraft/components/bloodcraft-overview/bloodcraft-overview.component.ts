// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'bloodcraft-overview',
  templateUrl: './bloodcraft-overview.component.html',
})
export class BloodcraftOverviewComponent {
  bloodCraftType: Craft = Craft.bloodcraft;
  constructor() {}
}
