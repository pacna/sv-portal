import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardPostRequest, CardResponse } from '../../types/api';
import { CardsApiService } from '../../services/cards-api.service';
import { Craft } from '../../types/customs/craft.enum';
import {
  CardManagementData,
  CardStepper,
  EvoStepper,
  IManagementStepper,
} from './types';

@Component({
  selector: 'card-management',
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.scss'],
})
export class CardManagementComponent implements OnInit {
  @ViewChild('cardStepper') cardStepper: IManagementStepper<CardStepper>;
  @ViewChild('audioStepper') audioStepper: IManagementStepper<string[]>;
  @ViewChild('evoStepper') evoStepper: IManagementStepper<EvoStepper>;
  title: string;
  constructor(
    private readonly dialogRef: MatDialogRef<CardManagementComponent>,
    private readonly cardsApiService: CardsApiService,
    @Inject(MAT_DIALOG_DATA) private readonly dialogData: CardManagementData
  ) {}

  ngOnInit(): void {
    this.title = `Create ${Craft[this.dialogData.craft]} card`;
  }

  close(): void {
    this.dialogRef.close(false);
  }

  get isValid(): boolean {
    return (
      this.cardStepper?.isValid() &&
      this.audioStepper?.isValid() &&
      this.evoStepper?.isValid()
    );
  }

  submit(): void {
    const card: CardStepper = this.cardStepper.getValue();
    const evo: EvoStepper = this.evoStepper.getValue();

    const request: CardPostRequest = {
      craft: this.dialogData.craft,
      name: card.name,
      pack: card.pack,
      ppCost: card.ppCost,
      rarity: card.rarity,
      type: card.type,
      audioLocations: this.audioStepper.getValue(),
      baseEvo: evo.base,
      evolved: evo?.evolved,
    } as CardPostRequest;

    this.cardsApiService
      .postCard(request)
      .subscribe((response: CardResponse) => {
        this.dialogRef.close(true);
      });
  }
}
