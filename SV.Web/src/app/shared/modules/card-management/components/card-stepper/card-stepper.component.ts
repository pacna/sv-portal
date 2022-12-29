// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Material
import { MatSelectChange } from '@angular/material/select';

// Third party
import { filter } from 'rxjs';

// Shared
import { Rarities, Packs, CardTypes } from '@svportal/shared/constants';
import {
  CardPack,
  RartiyConfig,
  CardTypeConfig,
  Rarity,
  CardType,
} from '@svportal/shared/types/customs';

// Self
import {
  CardEditEventService,
  CardManagementEventService,
} from '../../services';
import { CardEditEvent, CardStepper, IManagementStepper } from '../../types';

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
  private nameCtrl = new FormControl<string>(null, [Validators.required]);
  private rarityCtrl = new FormControl<Rarity>(null, [Validators.required]);
  private typeCtrl = new FormControl<CardType>(null, [Validators.required]);
  private ppCostCtrl = new FormControl<number>(null, [Validators.required]);
  private packCtrl = new FormControl<CardPack>(null, [Validators.required]);
  cardStepperFormGroup = new FormGroup<{
    name: FormControl<string>;
    rarity: FormControl<Rarity>;
    type: FormControl<CardType>;
    ppCost: FormControl<number>;
    pack: FormControl<CardPack>;
  }>({
    name: this.nameCtrl,
    rarity: this.rarityCtrl,
    type: this.typeCtrl,
    ppCost: this.ppCostCtrl,
    pack: this.packCtrl,
  });
  constructor(
    private readonly eventService: CardManagementEventService,
    private readonly eventEditService: CardEditEventService
  ) {}

  ngOnInit(): void {
    this.handler();
  }

  updateEvoForm(event: MatSelectChange): void {
    this.eventService.send({ type: event.value });
  }

  get stepperFormGroup(): FormGroup {
    return this.cardStepperFormGroup;
  }

  private handler(): void {
    this.eventEditService
      .listener()
      .pipe(filter(Boolean))
      .subscribe((event: CardEditEvent) => {
        this.handleMessage(event);
      });
  }

  private handleMessage(event: CardEditEvent): void {
    const { card } = event;
    this.nameCtrl.setValue(card.name);
    this.rarityCtrl.setValue(card.rarity);
    this.rarityCtrl.disable();
    this.typeCtrl.setValue(card.type);
    this.typeCtrl.disable();
    this.ppCostCtrl.setValue(card.ppCost);
    this.packCtrl.setValue(card.pack);
    this.packCtrl.disable();
  }

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
