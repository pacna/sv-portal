/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'shadowcraft-detail',
  templateUrl: './shadowcraft-detail.component.html',
})
export class ShadowcraftDetailComponent {
  shadowCraftType: Craft = Craft.shadowcraft;
  constructor() {}
}
