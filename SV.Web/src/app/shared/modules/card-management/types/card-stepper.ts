import { Rarity, CardType, CardPack } from '../../../types/customs';

export interface CardStepper {
  name: string;
  rarity: Rarity;
  type: CardType;
  ppCost: number;
  pack: CardPack;
}
