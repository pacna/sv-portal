import { AllOrNone } from './../../types/customs/all-or-none.enum';
import { CardsFilterRequest } from './../../types/customs/cards-filter-request';
import { CardTypes } from './card-types';
import { Rarities } from './rarities';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  all: AllOrNone = AllOrNone.all;
  none: AllOrNone = AllOrNone.none;
  rarities: Record<'bronze' | 'silver' | 'gold' | 'legendary', RartiyConfig> =
    Rarities;
  cardTypes: Record<'follower' | 'spell' | 'amulet', CardTypeConfig> =
    CardTypes;
  nameCtrl: FormControl = new FormControl(null);
  raritiesCtrl: FormControl = new FormControl([]);
  typesCtrl: FormControl = new FormControl([]);
  craftCtrl: FormControl = new FormControl(this.none, [Validators.required]);
  filterSearchFormGroup: FormGroup = new FormGroup({
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
    this.craftCtrl.setValue(
      String(request.isAll) == 'true' ? this.all : this.none
    );

    this.nameCtrl.setValue(request.name);

    // map these to num since they get return as 'string' from the route queryParams
    this.raritiesCtrl.setValue(
      request.rarities ? this.mapToNumber(request.rarities) : []
    );
    this.typesCtrl.setValue(
      request.types ? this.mapToNumber(request.types) : []
    );
  }

  private mapToNumber<TValue>(value: TValue | TValue[]): number[] {
    if (Array.isArray(value)) {
      return value.map((x: TValue) => Number(x));
    }
    return [Number(value)];
  }
}
