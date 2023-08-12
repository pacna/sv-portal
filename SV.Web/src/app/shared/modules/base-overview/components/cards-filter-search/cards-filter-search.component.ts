// Angular
import { FormControl, FormGroup } from '@angular/forms';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

// Self
import { CardsFilterRequest } from '../../types/cards-filter-request';
import { CardTypes } from './../../../../constants/card-types';
import { Rarities } from './../../../../constants/rarities';
import { Craft } from './../../../../types/customs/craft.enum';
import { RartiyConfig } from './../../../../types/customs/rarity-config';
import { CardTypeConfig } from './../../../../types/customs/card-type-config';
import { UtilityHelper } from './../../../../helpers';
import { Rarity } from './../../../../types/customs/rarity.enum';
import { CardType } from './../../../../types/customs/card-type.enum';

@Component({
  selector: 'cards-filter-search',
  templateUrl: './cards-filter-search.component.html',
  styleUrls: ['./cards-filter-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardsFilterSearchComponent {
  @Input() set headerCraftType(craftType: Craft) {
    this.header = Craft[craftType].toString();
  }

  @Input() set currentFilterRequest(request: CardsFilterRequest) {
    if (UtilityHelper.isObjEmpty<CardsFilterRequest>(request)) return;
    this.handleCurrentFilterRequest(request);
  }

  @Output() changeSearchFilter: EventEmitter<CardsFilterRequest> =
    new EventEmitter<CardsFilterRequest>();

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  rarities: Record<'bronze' | 'silver' | 'gold' | 'legendary', RartiyConfig> =
    Rarities;
  cardTypes: Record<'follower' | 'spell' | 'amulet', CardTypeConfig> =
    CardTypes;
  nameCtrl = new FormControl<string>(null);
  raritiesCtrl = new FormControl<Rarity[]>([]);
  typesCtrl = new FormControl<CardType[]>([]);
  craftCtrl = new FormControl<boolean>(false);
  filterSearchFormGroup = new FormGroup({
    name: this.nameCtrl,
    rarities: this.raritiesCtrl,
    types: this.typesCtrl,
    craft: this.craftCtrl,
  });
  header: string = '';

  setToAll(): void {
    this.craftCtrl.setValue(true);
  }

  get isAll(): boolean {
    return this.craftCtrl.value;
  }

  setToNone(): void {
    this.craftCtrl.setValue(false);
  }

  submit(): void {
    this.changeSearchFilter.emit({
      isAll: this.isAll,
      name: this.nameCtrl.value,
      rarities: this.raritiesCtrl.value,
      types: this.typesCtrl.value,
    } as CardsFilterRequest);
  }

  private handleCurrentFilterRequest(request: CardsFilterRequest): void {
    this.craftCtrl.setValue(request.isAll);
    this.nameCtrl.setValue(request.name);
    this.raritiesCtrl.setValue(request.rarities);
    this.typesCtrl.setValue(request.types);
  }
}
