// Angular
import { Component } from '@angular/core';
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'shadowcraft-overview',
  templateUrl: './shadowcraft-overview.component.html',
})
export class ShadowcraftOverviewComponent {
  shadowCraftType: Craft = Craft.shadowcraft;
  constructor() {}
}
