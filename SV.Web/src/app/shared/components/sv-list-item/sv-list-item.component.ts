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
  @Output() viewCardId: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sendCardId(id: string): void {
    this.viewCardId.emit(id);
  }
}
