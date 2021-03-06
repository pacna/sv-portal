import { AllOrNone } from './../../types/customs/all-or-none.enum';
import { CardsFilterRequest } from './../../types/customs/cards-filter-request';
import { CardTypes } from '../../constants/card-types';
import { Rarities } from '../../constants/rarities';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Craft } from '../../types/customs/craft.enum';
import { RartiyConfig } from '../../types/customs/rarity-config';
import { CardTypeConfig } from '../../types/customs/card-type-config';

@Component({
  selector: 'cards-filter-search',
  templateUrl: './cards-filter-search.component.html',
  styleUrls: ['./cards-filter-search.component.scss'],
})
export class CardsFilterSearchComponent implements OnInit {
  @Input() set headerCraftType(craftType: Craft) {
    this.header = Craft[craftType].toString();
  }

  @Input() set currentFilterRequest(request: CardsFilterRequest) {
    if (!this.isObjEmpty(request)) return;
    this.handleCurrentFilterRequest(request);
  }

  @Output() changeSearchFilter: EventEmitter<CardsFilterRequest> =
    new EventEmitter<CardsFilterRequest>();

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  all: AllOrNone = AllOrNone.all;
  none: AllOrNone = AllOrNone.none;
  rarities: Record<'bronze' | 'silver' | 'gold' | 'legendary', RartiyConfig> =
    Rarities;
  cardTypes: Record<'follower' | 'spell' | 'amulet', CardTypeConfig> =
    CardTypes;
  nameCtrl: UntypedFormControl = new UntypedFormControl(null);
  raritiesCtrl: UntypedFormControl = new UntypedFormControl([]);
  typesCtrl: UntypedFormControl = new UntypedFormControl([]);
  craftCtrl: UntypedFormControl = new UntypedFormControl(this.none, [Validators.required]);
  filterSearchFormGroup: UntypedFormGroup = new UntypedFormGroup({
    name: this.nameCtrl,
    rarities: this.raritiesCtrl,
    types: this.typesCtrl,
    craft: this.craftCtrl,
  });
  header: string = '';
  constructor() {}

  ngOnInit(): void {}

  setToAll(): void {
    this.craftCtrl.setValue(this.all);
  }

  get isAll(): boolean {
    return this.craftCtrl.value === this.all;
  }

  isObjEmpty(currentFilterRequest: CardsFilterRequest): boolean {
    return Object.keys(currentFilterRequest).length > 0;
  }

  setToNone(): void {
    this.craftCtrl.setValue(this.none);
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
    this.craftCtrl.setValue(request.isAll ? this.all : this.none);
    this.nameCtrl.setValue(request.name);
    this.raritiesCtrl.setValue(request.rarities);
    this.typesCtrl.setValue(request.types);
  }
}
