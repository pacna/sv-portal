/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'forestcraft-detail',
  templateUrl: './forestcraft-detail.component.html',
})
export class ForestcraftDetailComponent {
  forestCraftType: Craft = Craft.forestcraft;
  constructor() {}
}
