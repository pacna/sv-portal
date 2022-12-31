// Angular
import { Component, Input } from '@angular/core';

// Self
import { PageSuccessState } from '../../types/customs/page-success-state.enum';

@Component({
  selector: 'page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
})
export class PageContentComponent {
  @Input() pageState: PageSuccessState;
  pageSuccessState = PageSuccessState;
}
