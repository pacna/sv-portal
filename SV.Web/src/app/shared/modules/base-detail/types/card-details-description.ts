import { CardPack } from '../../../types/customs/card-pack.enum';
import { Rarity } from '../../../types/customs/rarity.enum';

export type CardDetailsDescription = {
  craft: string;
  readableRarity: string;
  rarity: Rarity;
  type: string;
  ppCost: number;
  pack: CardPack;
};
