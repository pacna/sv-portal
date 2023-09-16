// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'bloodcraft-detail',
  templateUrl: './bloodcraft-detail.component.html',
})
export class BloodcraftDetailComponent {
  bloodCraftType: Craft = Craft.bloodcraft;
  constructor() {}
}
