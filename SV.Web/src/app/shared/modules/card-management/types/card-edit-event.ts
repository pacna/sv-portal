// Self
import { EvoStepper } from './evo-stepper';
import { CardStepper } from './card-stepper';

export interface CardEditEvent {
  card: CardStepper;
  audios: string[];
  evo: EvoStepper;
}
