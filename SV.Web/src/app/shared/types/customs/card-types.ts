import { CardType } from './../../types/customs/card-type.enum';
import { CardTypeConfig } from './../../types/customs/card-type-config';
export const CardTypes: Record<
  'follower' | 'spell' | 'amulet',
  CardTypeConfig
> = {
  follower: { type: CardType.follower, name: 'Follower' },
  spell: { type: CardType.spell, name: 'Spell' },
  amulet: { type: CardType.amulet, name: 'Amulet' },
};
