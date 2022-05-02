import { Component, Input, OnInit } from '@angular/core';
import { PageSuccessState } from '../../types/customs/page-success-state.enum';

@Component({
  selector: 'page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
})
export class PageContentComponent implements OnInit {
  @Input() pageState: PageSuccessState;
  pageSuccessState = PageSuccessState;
  constructor() {}

  ngOnInit(): void {}
}
