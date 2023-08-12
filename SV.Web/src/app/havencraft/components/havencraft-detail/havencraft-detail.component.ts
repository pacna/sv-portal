/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'havencraft-detail',
  templateUrl: './havencraft-detail.component.html',
})
export class HavencraftDetailComponent {
  havenCraftType: Craft = Craft.havencraft;
  constructor() {}
}
