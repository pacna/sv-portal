import { CardType } from './../customs/card-type.enum';
import { Rarity } from './../customs/rarity.enum';
import { Craft } from '../customs/craft.enum';

export interface CardSearchRequest {
  craft: Craft;
  name: string;
  rarities: Rarity[];
  types: CardType[];
}
