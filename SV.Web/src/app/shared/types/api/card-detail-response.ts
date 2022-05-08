import { CardPack } from './../customs/card-pack.enum';
import { EvoSpecs } from '../customs/evo-specs';
import { BattleStats } from './../customs/battle-stats';
import { CardResponse } from './card-response';

export interface CardDetailResponse extends CardResponse {
  abilityText: string;
  audioLocations: string[];
  battleStats: BattleStats;
  cardPack: CardPack;
  evo: EvoSpecs;
  flavorText: string;
  ppCost: number;
}
