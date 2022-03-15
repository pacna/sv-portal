import { CardTypes } from './card-types';
import { Rarities } from './rarities';
import { Component, Input, OnInit } from '@angular/core';
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
  readonly craftOption: 'All' | 'None' = 'All';
  rarities: Record<'bronze' | 'silver' | 'gold' | 'legendary', RartiyConfig> =
    Rarities;
  cardTypes: Record<'follower' | 'spell' | 'amulet', CardTypeConfig> =
    CardTypes;
  nameCtrl: FormControl = new FormControl(null);
  rarityCtrl: FormControl = new FormControl(null);
  typeCtrl: FormControl = new FormControl(null);
  craftCtrl: FormControl = new FormControl(this.craftOption, [
    Validators.required,
  ]);
  filterSearchFormGroup: FormGroup = new FormGroup({
    name: this.nameCtrl,
    rarity: this.rarityCtrl,
    type: this.typeCtrl,
    craft: this.craftCtrl,
  });
  header: string = '';
  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    console.log(this.filterSearchFormGroup.value);
  }
}
