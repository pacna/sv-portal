import { CardType } from './card-type.enum';
import { Rarity } from './rarity.enum';

export interface CardsFilterRequest {
  isAll: boolean;
  name: string;
  rarities: Rarity[];
  types: CardType[];
}
