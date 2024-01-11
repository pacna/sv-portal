// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'dragoncraft-detail',
  template: `<base-detail [craftType]="dragonCraftType"></base-detail>`,
})
export class DragoncraftDetailComponent {
  dragonCraftType: Craft = Craft.dragoncraft;
}
