import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Rarities,
  Packs,
  CardPack,
  RartiyConfig,
  CardTypeConfig,
  CardTypes,
} from '../../../../types/customs';

@Component({
  selector: 'card-stepper',
  templateUrl: './card-stepper.component.html',
  styleUrls: ['./card-stepper.component.scss'],
})
export class CardStepperComponent implements OnInit {
  rarities: Record<'bronze' | 'silver' | 'gold' | 'legendary', RartiyConfig> =
    Rarities;
  cardPacks: CardPack[] = Packs;
  cardTypes: Record<'follower' | 'spell' | 'amulet', CardTypeConfig> =
    CardTypes;
  protected nameCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  protected rarityCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  protected typeCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  protected ppCostCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  protected packCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);

  cardStepperFormGroup: FormGroup = new FormGroup({
    name: this.nameCtrl,
    rarity: this.rarityCtrl,
    type: this.typeCtrl,
    ppCost: this.ppCostCtrl,
    pack: this.packCtrl,
  });
  constructor() {}

  ngOnInit(): void {}
}
