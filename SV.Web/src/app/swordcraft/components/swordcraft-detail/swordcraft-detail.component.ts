/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'swordcraft-detail',
  templateUrl: './swordcraft-detail.component.html',
})
export class SwordcraftDetailComponent {
  swordCraftType: Craft = Craft.swordcraft;
  constructor() {}
}
