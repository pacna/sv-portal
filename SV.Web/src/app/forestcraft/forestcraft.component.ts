import { Gallery, GalleryConfig, GalleryItem, ImageItemData } from 'ng-gallery';
import { CardResponse } from './../shared/types/card-response';
import { CardsApiService } from './../shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';

const cards: CardResponse[] = [
  {
    id: '1',
    name: 'Amataz, Reverse Blader',
    artUrl: 'https://svgdb.me/assets/cards/en/C_100111010.png',
    cost: 2,
    atk: 2,
    def: 2,
    rarity: 'Legendary',
  },
  {
    id: '1',
    name: 'Amataz, Reverse Blader',
    artUrl: 'https://svgdb.me/assets/thumbnails/en/C_100011010.png',
    cost: 2,
    atk: 2,
    def: 2,
    rarity: 'Legendary',
  },
];
@Component({
  selector: 'forestcraft',
  templateUrl: './forestcraft.component.html',
  styleUrls: ['./forestcraft.component.scss'],
})
export class ForestcraftComponent implements OnInit {
  dataSource: GalleryItem[] = cards.map((x: CardResponse) => {
    return {
      type: 'image',
      data: { src: x.artUrl, thumb: x.artUrl } as ImageItemData,
    } as GalleryItem;
  });
  constructor(
    private readonly cardsApiService: CardsApiService,
    private readonly gallery: Gallery
  ) {}

  ngOnInit(): void {
    this.gallery
      .ref('lightbox', {
        thumbPosition: 'bottom',
        counterPosition: 'bottom',
        imageSize: 'contain',
        thumbView: 'contain',
      } as GalleryConfig)
      .load(this.dataSource);
  }
}
