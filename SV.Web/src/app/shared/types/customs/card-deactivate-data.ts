import { Craft } from './craft.enum';

export interface CardDeactivateData {
  id: string;
  name: string;
  craft: Craft;
}
