// Angular
import { Component, Input } from '@angular/core';

// Self
import { FollowerDescription } from './../../../../types/customs/follower-description';
import { CardDetailResponse } from './../../../../types/api/card-detail-response';

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
