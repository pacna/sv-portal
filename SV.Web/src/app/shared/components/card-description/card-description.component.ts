import { CardDescription } from './../../types/customs/card-description';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss'],
})
export class CardDescriptionComponent implements OnInit {
  @Input() set cardDescription(cardDescription: CardDescription) {
    if (!cardDescription) return;
    this.handleCardDescription(cardDescription);
  }

  description: CardDescription = {} as CardDescription;
  constructor() {}

  ngOnInit(): void {}

  private handleCardDescription(cardDescription: CardDescription): void {
    this.description = {
      abilityText: cardDescription.abilityText ?? '- -',
      flavorText: cardDescription.flavorText ?? '- -',
    };
  }
}
