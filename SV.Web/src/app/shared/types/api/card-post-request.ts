import { CardPack, CardType, Craft, Rarity } from '../customs';
import { CardPutRequest } from './card-put-request';

export interface CardPostRequest extends CardPutRequest {
  craft: Craft;
  pack: CardPack;
  rarity: Rarity;
  type: CardType;
}
