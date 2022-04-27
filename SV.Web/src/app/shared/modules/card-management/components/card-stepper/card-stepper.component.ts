import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Rarities,
  Packs,
  CardPack,
  RartiyConfig,
  CardTypeConfig,
  CardTypes,
} from '../../../../types/customs';
import { CardStepper, IManagementStepper } from '../../types';

@Component({
  selector: 'card-stepper',
  templateUrl: './card-stepper.component.html',
  styleUrls: ['./card-stepper.component.scss'],
})
export class CardStepperComponent
  implements OnInit, IManagementStepper<CardStepper>
{
  rarities: Record<'bronze' | 'silver' | 'gold' | 'legendary', RartiyConfig> =
    Rarities;
  cardPacks: CardPack[] = Packs;
  cardTypes: Record<'follower' | 'spell' | 'amulet', CardTypeConfig> =
    CardTypes;
  private nameCtrl: FormControl = new FormControl(null, [Validators.required]);
  private rarityCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  private typeCtrl: FormControl = new FormControl(null, [Validators.required]);
  private ppCostCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  private packCtrl: FormControl = new FormControl(null, [Validators.required]);

  cardStepperFormGroup: FormGroup = new FormGroup({
    name: this.nameCtrl,
    rarity: this.rarityCtrl,
    type: this.typeCtrl,
    ppCost: this.ppCostCtrl,
    pack: this.packCtrl,
  });
  constructor() {}

  ngOnInit(): void {}

  public isValid(): boolean {
    return this.cardStepperFormGroup.valid;
  }

  public getValue(): CardStepper {
    return {
      name: this.nameCtrl.value,
      rarity: this.rarityCtrl.value,
      type: this.typeCtrl.value,
      ppCost: this.ppCostCtrl.value,
      pack: this.packCtrl.value,
    };
  }
}
