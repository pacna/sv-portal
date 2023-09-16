// Self
import { Rarity } from '../types/customs/rarity.enum';
import { RartiyConfig } from '../types/customs/rarity-config';

export const Rarities: Record<
  'bronze' | 'silver' | 'gold' | 'legendary',
  RartiyConfig
> = {
  bronze: { type: Rarity.bronze, name: 'Bronze' },
  silver: { type: Rarity.silver, name: 'Silver' },
  gold: { type: Rarity.gold, name: 'Gold' },
  legendary: { type: Rarity.legendary, name: 'Legendary' },
};
