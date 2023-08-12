// Angular
import { Component, Input } from '@angular/core';

// Self
import { CardDescription } from './../../../../types/customs/card-description';

@Component({
  selector: 'card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss'],
})
export class CardDescriptionComponent {
  @Input() set cardDescription(cardDescription: CardDescription) {
    if (!cardDescription) return;
    this.handleCardDescription(cardDescription);
  }

  description: CardDescription = {} as CardDescription;

  private handleCardDescription(cardDescription: CardDescription): void {
    this.description = {
      abilityText: cardDescription.abilityText ?? '- -',
      flavorText: cardDescription.flavorText ?? '- -',
    };
  }
}
