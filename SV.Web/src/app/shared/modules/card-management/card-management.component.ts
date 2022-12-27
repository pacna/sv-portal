// Angular
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';

// Material
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

// Third party
import { Observable } from 'rxjs';

// Shared
import {
  CardDetailResponse,
  CardPostRequest,
  CardPutRequest,
  CardResponse,
} from '@svportal/shared/types/api';
import { CardsApiService } from '@svportal/shared/services';
import { Craft } from '@svportal/shared/types/customs/craft.enum';

// Self
import {
  CardManagementData,
  CardStepper,
  EvoStepper,
  IFormValue,
  IManagementStepper,
} from './types';
import { CardEditEventService, CardManagementEventService } from './services';

@Component({
  selector: 'card-management',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.scss'],
})
export class CardManagementComponent implements OnInit {
  @ViewChild('cardStepper') cardStepper: IManagementStepper<CardStepper>;
  @ViewChild('audioStepper') audioStepper: IFormValue<string[]>;
  @ViewChild('evoStepper') evoStepper: IManagementStepper<EvoStepper>;
  title: string;
  constructor(
    private readonly dialogRef: MatDialogRef<CardManagementComponent>,
    private readonly cardsApiService: CardsApiService,
    private readonly snackBar: MatSnackBar,
    private readonly eventService: CardManagementEventService,
    private readonly eventEditService: CardEditEventService,
    @Inject(MAT_DIALOG_DATA) private readonly dialogData: CardManagementData
  ) {}

  ngOnInit(): void {
    this.title = this.displayCardTitle(this.dialogData);
    this.fireOnEdit(this.dialogData);
  }

  close(): void {
    this.exit();
  }

  submit(): void {
    const card: CardStepper = this.cardStepper.getValue();
    const evo: EvoStepper = this.evoStepper.getValue();

    let cardObs$: Observable<CardResponse>;
    let msg: string = 'Card added';

    if (this.dialogData.card) {
      const id: string = this.dialogData.card.id;
      cardObs$ = this.cardsApiService.putCard(id, {
        name: card.name,
        ppCost: card.ppCost,
        audioLocations: this.audioStepper.getValue(),
        baseEvo: evo.base,
        evolved: evo?.evolved,
      } as CardPutRequest);
      msg = 'Card updated';
    } else {
      cardObs$ = this.cardsApiService.postCard({
        craft: this.dialogData.craft,
        name: card.name,
        pack: card.pack,
        ppCost: card.ppCost,
        rarity: card.rarity,
        type: card.type,
        audioLocations: this.audioStepper.getValue(),
        baseEvo: evo.base,
        evolved: evo?.evolved,
      } as CardPostRequest);
    }

    cardObs$.subscribe((response: CardResponse) => {
      this.exit(response);
      this.snackBar.open(msg, null, { duration: 3000 });
    });
  }

  get isValid(): boolean {
    return this.cardStepper?.isValid() && this.evoStepper?.isValid();
  }

  private exit(card: CardResponse = null): void {
    this.dialogRef.close(card);
    this.eventService.clearCache();
    this.eventEditService.clearCache();
  }

  private fireOnEdit(cardData: CardManagementData): void {
    if (cardData.card) {
      const card: CardStepper = this.createCard(cardData.card);
      const evo: EvoStepper = this.createEvo(cardData.card);
      this.eventEditService.send({
        card: card,
        audios: cardData.card.audioLocations,
        evo: evo,
      });
    }
  }

  private displayCardTitle(cardData: CardManagementData): string {
    return cardData.card
      ? `Edit ${Craft[cardData.craft]} card`
      : `Create ${Craft[cardData.craft]} card`;
  }

  private createCard(card: CardDetailResponse): CardStepper {
    return {
      name: card.name,
      rarity: card.rarity,
      type: card.type,
      ppCost: card.ppCost,
      pack: card.cardPack,
    };
  }

  private createEvo(card: CardDetailResponse): EvoStepper {
    return {
      base: {
        artLocation: card.artLocation,
        abilityText: card.abilityText,
        battleStats: card.battleStats,
        flavorText: card.flavorText,
      },
      evolved: card.evo
        ? {
            artLocation: card.evo.artLocation,
            abilityText: card.evo.abilityText,
            battleStats: card.evo.battleStats,
            flavorText: card.evo.flavorText,
          }
        : null,
    };
  }
}
