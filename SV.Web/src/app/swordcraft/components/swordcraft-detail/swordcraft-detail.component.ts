/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'swordcraft-detail',
  template: `<base-detail [craftType]="swordCraftType"></base-detail>`,
})
export class SwordcraftDetailComponent {
  swordCraftType: Craft = Craft.swordcraft;
}
