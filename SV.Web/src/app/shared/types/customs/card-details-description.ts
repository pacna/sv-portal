import { CardPack } from './card-pack.enum';
import { Rarity } from './rarity.enum';

export interface CardDetailsDescription {
  craft: string;
  readableRarity: string;
  rarity: Rarity;
  type: string;
  ppCost: number;
  pack: CardPack;
}
