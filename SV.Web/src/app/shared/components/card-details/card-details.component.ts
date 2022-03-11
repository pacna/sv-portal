import { LiquefyCost } from './../../types/customs/liquefy-cost.enum';
import { CardPack } from './../../types/customs/card-pack.enum';
import { CreateCost } from './../../types/customs/create-cost.enum';
import { CardType } from './../../types/customs/card-type.enum';
import { Rarity } from './../../types/customs/rarity.enum';
import { CardDetailResponse } from './../../types/api/card-detail-response';
import { Component, Input, OnInit } from '@angular/core';
import { CardDetails } from '../../types/customs/card-details';
import { Craft } from '../..';
import { enumCostMapperToString } from './function';

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  @Input() set cardDetail(cardDetail: CardDetailResponse) {
    if (!cardDetail) return;
    this.handleCardDetail(cardDetail);
  }
  card: CardDetails;

  constructor() {}

  ngOnInit(): void {}

  private handleCardDetail(cardDetail: CardDetailResponse): void {
    this.card = {
      craft: Craft[cardDetail.craft],
      rarity: Rarity[cardDetail.rarity],
      createCostText: this.displayCost(
        cardDetail.cardPack,
        cardDetail.rarity,
        CreateCost
      ),
      liquefyCostText: this.displayCost(
        cardDetail.cardPack,
        cardDetail.rarity,
        LiquefyCost
      ),
      type: CardType[cardDetail.type],
    } as CardDetails;
  }

  private displayCost(cardPack: CardPack, rarity: Rarity, cost: any): string {
    if (cardPack === CardPack.basic || cardPack === CardPack.promo) {
      return '- -';
    }
    switch (rarity) {
      case Rarity.bronze:
        return enumCostMapperToString(cost, 'bronze');
      case Rarity.silver:
        return enumCostMapperToString(cost, 'silver');
      case Rarity.gold:
        return enumCostMapperToString(cost, 'gold');
      case Rarity.legendary:
        return enumCostMapperToString(cost, 'legendary');
      default:
        return '- -';
    }
  }
}
