// Angular
import { Component, Input } from '@angular/core';

// Self
import { CardType } from '../../types/customs/card-type.enum';
import { CardDetailResponse } from '../../types/api/card-detail-response';
import { CardDetails } from '../../types/customs/card-details';
import { Craft } from '../../types/customs/craft.enum';
import { CardCostPipe } from '../../pipes/card-cost.pipe';
import { Rarity } from '../../types/customs/rarity.enum';

@Component({
  selector: 'card-details-description',
  templateUrl: './card-details-description.component.html',
  styleUrls: ['./card-details-description.component.scss'],
  providers: [CardCostPipe],
})
export class CardDetailsDescriptionComponent {
  @Input() set cardDetail(cardDetail: CardDetailResponse) {
    if (!cardDetail) return;
    this.handleCardDetail(cardDetail);
  }

  card: CardDetails = {} as CardDetails;

  private handleCardDetail(cardDetail: CardDetailResponse): void {
    this.card = {
      craft: Craft[cardDetail.craft],
      rarity: cardDetail.rarity,
      readableRarity: Rarity[cardDetail.rarity],
      type: CardType[cardDetail.type],
      ppCost: cardDetail.ppCost,
      pack: cardDetail.cardPack,
    } as CardDetails;
  }
}
