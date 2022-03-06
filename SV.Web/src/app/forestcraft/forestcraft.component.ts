import { CardResponse } from './../shared/types/card-response';
import { CardsApiService } from './../shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forestcraft',
  templateUrl: './forestcraft.component.html',
  styleUrls: ['./forestcraft.component.scss'],
})
export class ForestcraftComponent implements OnInit {
  cards: CardResponse[] = [
    {
      id: '1',
      name: 'Amataz, Reverse Blader',
      artUrl: 'https://svgdb.me/assets/cards/en/C_100111010.png',
    },
    {
      id: '1',
      name: 'Amataz, Reverse Blader',
      artUrl: 'https://svgdb.me/assets/thumbnails/en/C_100011010.png',
    },
  ];
  constructor(private readonly cardsApiService: CardsApiService) {}

  ngOnInit(): void {}
}
