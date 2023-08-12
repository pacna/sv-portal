// Angular
import { Component, Input } from '@angular/core';

// Third party
import { Gallery, GalleryConfig, GalleryItem, ImageItemData } from 'ng-gallery';

// Shared
import { CardType } from './../../../../types/customs/card-type.enum';
import { CardDetailResponse } from './../../../../types/api/card-detail-response';
import { UtilityHelper } from './../../../../helpers';
import { Craft } from './../../../../types/customs/craft.enum';
import { Rarity } from './../../../../types/customs/rarity.enum';

// Self
import { CardCostPipe } from '../../pipes/card-cost.pipe';
import { CardDescription } from '../../types/card-description';
import { CardDetailsDescription } from '../../types/card-details-description';

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
  providers: [CardCostPipe],
})
export class CardDetailsComponent {
  @Input() set detail(detail: CardDetailResponse) {
    if (!detail || !this.hasCard(detail)) return;
    this.handleCardDetails(detail);
  }
  card: CardDetailResponse = {} as CardDetailResponse;
  audio = new Audio();
  cardDescription: CardDescription = {} as CardDescription;
  audioCounter: number = 0;
  cardsGallery: GalleryItem[] = [];
  cardDetailsDescription: CardDetailsDescription = {} as CardDetailsDescription;
  constructor(private gallery: Gallery) {}

  playAudio(): void {
    this.audio.src = this.card.audioLocations[this.audioCounter];
    this.audio.play();
    this.audioCounter++;
    if (this.audioCounter >= this.card.audioLocations.length) {
      this.audioCounter = 0;
    }
  }

  get isFollower(): boolean {
    return this.card.type === CardType.follower;
  }

  get hasAudio(): boolean {
    return !UtilityHelper.isStringOrArrayEmpty(this.card.audioLocations);
  }

  private handleCardDetail(cardDetail: CardDetailResponse): void {
    this.cardDetailsDescription = {
      craft: Craft[cardDetail.craft],
      rarity: cardDetail.rarity,
      readableRarity: Rarity[cardDetail.rarity],
      type: CardType[cardDetail.type],
      ppCost: cardDetail.ppCost,
      pack: cardDetail.cardPack,
    } as CardDetailsDescription;
  }

  private handleCardDetails(detail: CardDetailResponse): void {
    this.card = detail;
    this.cardDescription = {
      abilityText: detail.abilityText,
      flavorText: detail.flavorText,
    };
    this.loadCardsGallery(detail);
    this.handleCardDetail(detail);
  }

  hasCard(card: CardDetailResponse): boolean {
    return !UtilityHelper.isObjEmpty(card);
  }

  private loadCardsGallery(card: CardDetailResponse): void {
    this.cardsGallery[0] = {
      type: 'image',
      data: {
        src: card.artLocation,
        thumb: card.artLocation,
      } as ImageItemData,
    } as GalleryItem;

    if (this.isFollower) {
      this.cardsGallery[1] = {
        type: 'image',
        data: {
          src: card.evo.artLocation,
          thumb: card.evo.artLocation,
        } as ImageItemData,
      } as GalleryItem;
    }

    this.gallery
      .ref('cards-detail-gallery', {
        thumbPosition: 'bottom',
        counterPosition: 'bottom',
        imageSize: 'contain',
        thumbView: 'contain',
      } as GalleryConfig)
      .load(this.cardsGallery);
  }
}
