// Angular
import { Component, Input } from '@angular/core';

// Self
import { Craft } from '../types/customs';

// https://stackoverflow.com/questions/41240163/mocking-child-components-angular-2

@Component({
  selector: 'base-detail',
  template: '',
})
export class MockBaseDetailComponent {
  @Input() craftType: Craft;
}
