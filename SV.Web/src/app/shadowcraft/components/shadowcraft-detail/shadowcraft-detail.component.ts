/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'shadowcraft-detail',
  template: `<base-detail [craftType]="shadowCraftType"></base-detail>`,
})
export class ShadowcraftDetailComponent {
  shadowCraftType: Craft = Craft.shadowcraft;
}
