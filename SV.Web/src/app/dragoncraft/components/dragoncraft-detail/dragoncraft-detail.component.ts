// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'dragoncraft-detail',
  templateUrl: './dragoncraft-detail.component.html',
})
export class DragoncraftDetailComponent {
  dragonCraftType: Craft = Craft.dragoncraft;
  constructor() {}
}
