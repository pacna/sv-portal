import { CardType } from '../customs/card-type.enum';
import { Craft } from '../customs/craft.enum';
import { Rarity } from '../customs/rarity.enum';

export interface CardResponse {
  artLocation: string;
  craft: Craft;
  id: string;
  name: string;
  rarity: Rarity;
  type: CardType;
}
