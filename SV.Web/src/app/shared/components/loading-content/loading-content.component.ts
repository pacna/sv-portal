import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loading-content',
  templateUrl: './loading-content.component.html',
  styleUrls: ['./loading-content.component.scss'],
})
export class LoadingContentComponent implements OnInit {
  @Input() hasLoaded: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
