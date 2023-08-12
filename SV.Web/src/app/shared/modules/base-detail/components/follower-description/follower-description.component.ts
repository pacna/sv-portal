// Angular
import { Component, Input } from '@angular/core';

// Shared
import { CardDetailResponse } from './../../../../types/api/card-detail-response';

// Self
import { FollowerDescription } from '../../types/follower-description';

@Component({
  selector: 'follower-description',
  templateUrl: './follower-description.component.html',
  styleUrls: ['./follower-description.component.scss'],
})
export class FollowerDescriptionComponent {
  @Input() set cardDetail(cardDetail: CardDetailResponse) {
    if (!cardDetail) return;
    this.handleCardDetail(cardDetail);
  }

  followerDescriptions: FollowerDescription[] = [];

  private handleCardDetail(cardDetail: CardDetailResponse): void {
    this.followerDescriptions.push({
      atk: cardDetail.battleStats.atk,
      def: cardDetail.battleStats.def,
      cardDescription: {
        abilityText: cardDetail.abilityText,
        flavorText: cardDetail.flavorText,
      },
      form: 'Base',
    });
    this.followerDescriptions.push({
      atk: cardDetail.evo.battleStats.atk,
      def: cardDetail.evo.battleStats.def,
      cardDescription: {
        abilityText: cardDetail.evo.abilityText,
        flavorText: cardDetail.evo.flavorText,
      },
      form: 'Evolved',
    });
  }
}
