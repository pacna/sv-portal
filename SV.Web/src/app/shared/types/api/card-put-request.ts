import { EvoSpecs } from '../customs/evo-specs';

export interface CardPutRequest {
  name: string;
  ppCost: number;
  audioLocations: string[];
  baseEvo: EvoSpecs;
  evolved: EvoSpecs;
}
