// Angular
import { Params } from '@angular/router';

// Self
import { CardSearchRequest } from './../api/card-search-request';
import { Craft } from './craft.enum';
import { CardType } from './card-type.enum';
import { Rarity } from './rarity.enum';
import { UtilityHelper } from '../../helpers/utility-helper';

export class CardsFilterRequest {
  isAll: boolean;
  name: string;
  rarities: Rarity[];
  types: CardType[];

  constructor(params: Params) {
    this.sanitizeQueryParams(params);
  }

  public mapToRequest(craft: Craft): CardSearchRequest {
    return {
      craft: !this.isAll ? craft : null,
      name: this.name,
      rarities: this.rarities,
      types: this.types,
    } as CardSearchRequest;
  }

  private sanitizeQueryParams(params: Params): void {
    const entriesinParams: [string, any][] = Object.entries(params);

    entriesinParams.forEach(([key, value]: [string, any]) => {
      if (this.isArrayProp(key)) {
        this[key] = Array.isArray(value)
          ? value.map((x: string) => Number(x))
          : [Number(value)];
      } else if (UtilityHelper.isStringBool(value)) {
        this[key] = value === 'true';
      } else {
        this[key] = value;
      }
    });
  }

  private isArrayProp(propValue): boolean {
    return ['rarities', 'types'].includes(propValue);
  }
}
