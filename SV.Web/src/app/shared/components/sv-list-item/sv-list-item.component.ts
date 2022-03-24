import { CardResponse } from '../../types/api/card-response';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sv-list-item',
  templateUrl: './sv-list-item.component.html',
  styleUrls: ['./sv-list-item.component.scss'],
})
export class SVListItemComponent implements OnInit {
  @Input() card: CardResponse;
  @Input() cardIndex: number;
  @Output() viewCardInfo: EventEmitter<Pick<CardResponse, 'id' | 'craft'>> =
    new EventEmitter<Pick<CardResponse, 'id' | 'craft'>>();
  constructor() {}

  ngOnInit(): void {}

  sendCardInfo(info: Pick<CardResponse, 'id' | 'craft'>): void {
    this.viewCardInfo.emit(info);
  }
}
