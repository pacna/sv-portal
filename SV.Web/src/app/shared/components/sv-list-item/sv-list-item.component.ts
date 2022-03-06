import { CardResponse } from './../../types/card-response';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sv-list-item',
  templateUrl: './sv-list-item.component.html',
  styleUrls: ['./sv-list-item.component.scss'],
})
export class SVListItemComponent implements OnInit {
  @Input() card: CardResponse;
  @Input() cardIndex: number;
  constructor() {}

  ngOnInit(): void {}
}
