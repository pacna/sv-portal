import {
  CardPack,
  CardType,
  Craft,
  EvoFollowerSpecs,
  Rarity,
} from '../customs';

export interface CardPostRequest {
  craft: Craft;
  name: string;
  pack: CardPack;
  ppCost: number;
  rarity: Rarity;
  type: CardType;
  audioLocations: string[];
  baseEvo: EvoFollowerSpecs;
  evolved: EvoFollowerSpecs;
}
