// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Self
import { CardResponse } from '../../types/api/card-response';

@Component({
  selector: 'sv-list-item',
  templateUrl: './sv-list-item.component.html',
  styleUrls: ['./sv-list-item.component.scss'],
})
export class SVListItemComponent {
  @Input() card: CardResponse;
  @Input() cardIndex: number;
  @Output() viewCardInfo: EventEmitter<Pick<CardResponse, 'id' | 'craft'>> =
    new EventEmitter<Pick<CardResponse, 'id' | 'craft'>>();

  sendCardInfo(info: Pick<CardResponse, 'id' | 'craft'>): void {
    this.viewCardInfo.emit(info);
  }
}
