import { CardResponse } from '../../../shared/types/api/card-response';
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
  card: CardResponse;
  galleryCards: CardResponse[] = [];
  audio = new Audio();
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
    this.audio.src = 'https://www.w3schools.com/tags/horse.mp3';
    this.audio.play();
  }

  getCard(id: string): Observable<void> {
    return this.cardsApiService.getCard(id).pipe(
      map((response: CardResponse) => {
        this.card = response;
        this.galleryCards = [this.card];
      })
    );
  }
}
