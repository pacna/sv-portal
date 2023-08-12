// Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Self
import { PageSuccessState } from '../../types/customs/page-success-state.enum';
import { EmptyContentComponent } from '../empty-content/empty-content.component';

@Component({
  selector: 'page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, EmptyContentComponent],
})
export class PageContentComponent {
  @Input() pageState: PageSuccessState;
  pageSuccessState = PageSuccessState;
}
