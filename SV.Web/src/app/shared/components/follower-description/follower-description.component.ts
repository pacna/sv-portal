import { FollowerDescription } from './../../types/customs/follower-description';
import { CardDetailResponse } from './../../types/api/card-detail-response';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'follower-description',
  templateUrl: './follower-description.component.html',
  styleUrls: ['./follower-description.component.scss'],
})
export class FollowerDescriptionComponent implements OnInit {
  @Input() set cardDetail(cardDetail: CardDetailResponse) {
    if (!cardDetail) return;
    this.handleCardDetail(cardDetail);
  }
  evolvedHeaderText: string = 'Evolved';
  baseFollowerDetail: FollowerDescription = {} as FollowerDescription;
  evolvedFollowerDetail: FollowerDescription = {} as FollowerDescription;

  constructor() {}

  ngOnInit(): void {}

  private handleCardDetail(cardDetail: CardDetailResponse): void {
    this.baseFollowerDetail = {
      atk: cardDetail.battleStats.atk,
      def: cardDetail.battleStats.def,
      cardDescription: {
        abilityText: cardDetail.abilityText,
        flavorText: cardDetail.flavorText,
      },
    };

    this.evolvedFollowerDetail = {
      atk: cardDetail.evo.battleStats.atk,
      def: cardDetail.evo.battleStats.def,
      cardDescription: {
        abilityText: cardDetail.evo.abilityText,
        flavorText: cardDetail.evo.flavorText,
      },
    };
  }
}
