import { Gallery, GalleryConfig, GalleryItem, ImageItemData } from 'ng-gallery';
import { CardDescription } from './../../types/customs/card-description';
import { Component, Input, OnInit } from '@angular/core';
import { CardType } from '../../types/customs/card-type.enum';
import { CardDetailResponse } from '../../types/api/card-detail-response';
import { UtilityHelper } from '@svportal/shared/helpers';

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  @Input() set detail(detail: CardDetailResponse) {
    if (!detail || !this.hasCard(detail)) return;
    this.handleCardDetails(detail);
  }
  card: CardDetailResponse = {} as CardDetailResponse;
  audio = new Audio();
  cardDescription: CardDescription = {} as CardDescription;
  audioCounter: number = 0;
  cardsGallery: GalleryItem[] = [];
  constructor(private gallery: Gallery) {}

  ngOnInit(): void {}

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

  private handleCardDetails(detail: CardDetailResponse): void {
    this.card = detail;
    this.cardDescription = {
      abilityText: detail.abilityText,
      flavorText: detail.flavorText,
    };
    this.loadCardsGallery(detail);
  }

  hasCard(card: CardDetailResponse): boolean {
    return !UtilityHelper.isObjEmpty(card);
  }

  private loadCardsGallery(card: CardDetailResponse): void {
    this.cardsGallery.push({
      type: 'image',
      data: {
        src: card.artLocation,
        thumb: card.artLocation,
      } as ImageItemData,
    } as GalleryItem);

    if (this.isFollower) {
      this.cardsGallery.push({
        type: 'image',
        data: {
          src: card.evo.artLocation,
          thumb: card.evo.artLocation,
        } as ImageItemData,
      } as GalleryItem);
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
