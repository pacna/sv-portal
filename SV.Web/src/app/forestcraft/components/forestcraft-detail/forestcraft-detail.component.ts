import { CardDetailResponse } from '@svportal/shared/types/api/card-detail-response';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UtilityHelper } from '@svportal/shared/helpers';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { CardDeactivateComponent } from '@svportal/shared/components/card-deactivate/card-deactivate.component';
import { CardDeactivateData } from '@svportal/shared/types';

@UntilDestroy()
@Component({
  selector: 'forestcraft-detail',
  templateUrl: './forestcraft-detail.component.html',
  styleUrls: ['./forestcraft-detail.component.scss'],
})
export class ForestcraftDetailComponent implements OnInit {
  card: CardDetailResponse = {} as CardDetailResponse;
  constructor(
    private readonly cardsApiService: CardsApiService,
    private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog
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

  openCardDeactivate(): void {
    this.dialog.open(CardDeactivateComponent, {
      height: '240px',
      width: '400px',
      data: {
        id: this.card.id,
        name: this.card.name,
        craft: this.card.craft,
      } as CardDeactivateData,
      autoFocus: false,
    });
  }
}
