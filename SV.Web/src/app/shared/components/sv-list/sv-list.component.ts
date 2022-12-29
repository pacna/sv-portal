// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Third party
import { GalleryItem, ImageItemData, Gallery, GalleryConfig } from 'ng-gallery';

// Self
import { CardResponse } from '../../types/api/card-response';

@Component({
  selector: 'sv-list',
  templateUrl: './sv-list.component.html',
  styleUrls: ['./sv-list.component.scss'],
})
export class SVListComponent {
  @Input() set cards(cards: CardResponse[]) {
    if (!cards) return;
    this.handleCards(cards);
  }
  @Input() numberOfColumns: number = 4;
  @Output() viewCardInfo: EventEmitter<Pick<CardResponse, 'id' | 'craft'>> =
    new EventEmitter<Pick<CardResponse, 'id' | 'craft'>>();

  svCards: CardResponse[] = [];

  constructor(private gallery: Gallery) {}

  private handleCards(cards: CardResponse[]): void {
    this.svCards = cards;
    this.loadCardsGallery(cards);
  }

  private loadCardsGallery(cards: CardResponse[]): void {
    const cardsGallery: GalleryItem[] = cards.map((card: CardResponse) => {
      return {
        type: 'image',
        data: {
          src: card.artLocation,
          thumb: card.artLocation,
        } as ImageItemData,
      } as GalleryItem;
    });

    this.gallery
      .ref('sv-cards-gallery', {
        thumbPosition: 'bottom',
        counterPosition: 'bottom',
        imageSize: 'contain',
        thumbView: 'contain',
      } as GalleryConfig)
      .load(cardsGallery);
  }
}
