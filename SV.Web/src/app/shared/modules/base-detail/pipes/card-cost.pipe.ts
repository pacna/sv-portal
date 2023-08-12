// Angular
import { Pipe, PipeTransform } from '@angular/core';

// Shared
import { CardPack, Rarity } from '../../../types';

// Self
import { CreateCost } from '../types/create-cost.enum';
import { LiquefyCost } from '../types/liquefy-cost.enum';

@Pipe({ name: 'cardCost' })
export class CardCostPipe implements PipeTransform {
  transform(
    value: Rarity,
    pack: CardPack,
    createOrLiquefyCost: 'create' | 'liquefy'
  ): string {
    if (pack === CardPack.basic || pack === CardPack.promo) {
      return '- -';
    }

    if (createOrLiquefyCost === 'create') {
      return this.createCreateCost(value);
    }

    if (createOrLiquefyCost === 'liquefy') {
      return this.createLiquefyCost(value);
    }

    return '- -';
  }

  private createCreateCost(rarity: Rarity): string {
    switch (rarity) {
      case Rarity.bronze:
        return CreateCost.bronze.toString();
      case Rarity.silver:
        return CreateCost.silver.toString();
      case Rarity.gold:
        return CreateCost.gold.toString();
      case Rarity.legendary:
        return CreateCost.legendary.toString();
      default:
        return '- -';
    }
  }

  private createLiquefyCost(rarity: Rarity): string {
    switch (rarity) {
      case Rarity.bronze:
        return LiquefyCost.bronze.toString();
      case Rarity.silver:
        return LiquefyCost.silver.toString();
      case Rarity.gold:
        return LiquefyCost.gold.toString();
      case Rarity.legendary:
        return LiquefyCost.legendary.toString();
      default:
        return '- -';
    }
  }
}
