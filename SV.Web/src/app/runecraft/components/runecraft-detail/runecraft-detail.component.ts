/// Angular
import { Component } from '@angular/core';

// Shared
import { Craft } from '@svportal/shared/types/customs';

@Component({
  selector: 'runecraft-detail',
  templateUrl: './runecraft-detail.component.html',
})
export class RunecraftDetailComponent {
  runeCraftType: Craft = Craft.runecraft;
  constructor() {}
}
