// Angular
import { Component, Input } from '@angular/core';

// Self
import { LiquefyCost } from '../../types/customs/liquefy-cost.enum';
import { CardPack } from '../../types/customs/card-pack.enum';
import { CreateCost } from '../../types/customs/create-cost.enum';
import { CardType } from '../../types/customs/card-type.enum';
import { Rarity } from '../../types/customs/rarity.enum';
import { CardDetailResponse } from '../../types/api/card-detail-response';
import { CardDetails } from '../../types/customs/card-details';
import { Craft } from '../../types/customs/craft.enum';

@Component({
  selector: 'card-details-description',
  templateUrl: './card-details-description.component.html',
  styleUrls: ['./card-details-description.component.scss'],
})
export class CardDetailsDescriptionComponent {
  @Input() set cardDetail(cardDetail: CardDetailResponse) {
    if (!cardDetail) return;
    this.handleCardDetail(cardDetail);
  }

  card: CardDetails;

  private handleCardDetail(cardDetail: CardDetailResponse): void {
    this.card = {
      craft: Craft[cardDetail.craft],
      rarity: Rarity[cardDetail.rarity],
      createCost: this.displayCost(
        cardDetail.cardPack,
        () => CreateCost[Rarity[cardDetail.rarity]]
      ),
      liquefyCost: this.displayCost(
        cardDetail.cardPack,
        () => LiquefyCost[Rarity[cardDetail.rarity]]
      ),
      type: CardType[cardDetail.type],
      ppCost: cardDetail.ppCost,
    } as CardDetails;
  }

  private displayCost(
    cardPack: CardPack,
    displayCostFn: () => number
  ): string | number {
    if (cardPack === CardPack.basic || cardPack === CardPack.promo) {
      return '- -';
    }
    return displayCostFn();
  }
}
