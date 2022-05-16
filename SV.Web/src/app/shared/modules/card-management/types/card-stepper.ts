// Shared
import { Rarity, CardType, CardPack } from '@svportal/shared/types/customs';

export interface CardStepper {
  name: string;
  rarity: Rarity;
  type: CardType;
  ppCost: number;
  pack: CardPack;
}
