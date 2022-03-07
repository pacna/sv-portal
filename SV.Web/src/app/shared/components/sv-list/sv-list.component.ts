import { Component, Input, OnInit } from '@angular/core';
import { GalleryItem, ImageItemData, Gallery, GalleryConfig } from 'ng-gallery';
import { CardResponse } from '../../types/card-response';

@Component({
  selector: 'sv-list',
  templateUrl: './sv-list.component.html',
  styleUrls: ['./sv-list.component.scss'],
})
export class SVListComponent implements OnInit {
  @Input() set cards(cards: CardResponse[]) {
    if (!cards) return;
    this.handleCards(cards);
  }

  svCards: CardResponse[] = [];

  constructor(private gallery: Gallery) {}

  ngOnInit(): void {}

  private handleCards(cards: CardResponse[]): void {
    this.svCards = cards;
    this.loadCardsGallery(cards);
  }

  private loadCardsGallery(cards: CardResponse[]): void {
    const cardsGallery: GalleryItem[] = cards.map((card: CardResponse) => {
      return {
        type: 'image',
        data: { src: card.artPath, thumb: card.artPath } as ImageItemData,
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
