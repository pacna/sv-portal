import { CardsApiService } from './../shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forestcraft',
  templateUrl: './forestcraft.component.html',
  styleUrls: ['./forestcraft.component.scss'],
})
export class ForestcraftComponent implements OnInit {
  constructor(private readonly cardsApiService: CardsApiService) {}

  ngOnInit(): void {}
}
