import { CardPack } from './../customs/card-pack.enum';
import { CardType } from './../customs/card-type.enum';
import { Rarity } from './../customs/rarity.enum';
import { EvoFollowerSpecs } from './../customs/evo-follower-specs';
import { BattleStats } from './../customs/battle-stats';
import { CardResponse } from './card-response';

export interface CardDetailResponse extends CardResponse {
  abilityText: string;
  audioLocations: string[];
  battleStats: BattleStats;
  cardPack: CardPack;
  evo: EvoFollowerSpecs;
  flavorText: string;
  ppCost: number;
  rarity: Rarity;
  type: CardType;
}
