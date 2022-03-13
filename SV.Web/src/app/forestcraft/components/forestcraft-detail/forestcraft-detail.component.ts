import { CardDescription } from './../../../shared/types/customs/card-description';
import { CardType } from './../../../shared/types/customs/card-type.enum';
import { CardDetailResponse } from './../../../shared/types/api/card-detail-response';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'forestcraft-detail',
  templateUrl: './forestcraft-detail.component.html',
  styleUrls: ['./forestcraft-detail.component.scss'],
})
export class ForestcraftDetailComponent implements OnInit {
  card: CardDetailResponse = {} as CardDetailResponse;
  cardDescription: CardDescription = {} as CardDescription;
  audio = new Audio();
  audioCounter: number = 0;
  constructor(
    private readonly cardsApiService: CardsApiService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.handleDetailView();
  }

  private handleDetailView(): void {
    const cardId: string = this.route.snapshot.paramMap.get('id');
    this.getCard(cardId).subscribe();
  }

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
    return this.card.audioLocations?.length > 0;
  }

  getCard(id: string): Observable<void> {
    return this.cardsApiService.getCard(id).pipe(
      map((response: CardDetailResponse) => {
        this.card = response;
        this.cardDescription = {
          abilityText: response.abilityText,
          flavorText: response.flavorText,
        };
      })
    );
  }
}
