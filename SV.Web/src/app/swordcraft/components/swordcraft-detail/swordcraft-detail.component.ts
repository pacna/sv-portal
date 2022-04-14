import { CardDetailResponse } from '@svportal/shared/types/api/card-detail-response';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'swordcraft-detail',
  templateUrl: './swordcraft-detail.component.html',
  styleUrls: ['./swordcraft-detail.component.scss'],
})
export class SwordcraftDetailComponent implements OnInit {
  card: CardDetailResponse = {} as CardDetailResponse;
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

  hasCard(): boolean {
    return Object.keys(this.card).length > 0;
  }

  getCard(id: string): Observable<void> {
    return this.cardsApiService.getCard(id).pipe(
      map((response: CardDetailResponse) => {
        this.card = response;
      })
    );
  }
}
