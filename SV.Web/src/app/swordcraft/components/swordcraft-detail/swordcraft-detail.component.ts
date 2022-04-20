import { CardDetailResponse } from '@svportal/shared/types/api/card-detail-response';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UtilityHelper } from '@svportal/shared/helpers';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
    return !UtilityHelper.isObjEmpty(this.card);
  }

  getCard(id: string): Observable<void> {
    return this.cardsApiService.getCard(id).pipe(
      untilDestroyed(this),
      map((response: CardDetailResponse) => {
        this.card = response;
      })
    );
  }
}
