import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CardDeactivateComponent } from '@svportal/shared/components/card-deactivate/card-deactivate.component';
import { ModalConfig } from '@svportal/shared/constants/modal-config';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { CardDetailResponse } from '@svportal/shared/types/api/card-detail-response';
import { CardDeactivateData } from '@svportal/shared/types/customs/card-deactivate-data';
import { PageSuccessState } from '@svportal/shared/types/customs/page-success-state.enum';
import { map, Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'bloodcraft-detail',
  templateUrl: './bloodcraft-detail.component.html',
  styleUrls: ['./bloodcraft-detail.component.scss'],
})
export class BloodcraftDetailComponent implements OnInit {
  card: CardDetailResponse = {} as CardDetailResponse;
  pageSuccessState: PageSuccessState;
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

  getCard(id: string): Observable<void> {
    return this.cardsApiService.getCard(id).pipe(
      untilDestroyed(this),
      map((response: CardDetailResponse) => {
        this.card = response;
        this.pageSuccessState = PageSuccessState.exist;
      })
    );
  }

  openCardDeactivate(): void {
    this.dialog.open(CardDeactivateComponent, {
      height: ModalConfig.minHeight,
      width: ModalConfig.minWidth,
      data: {
        id: this.card.id,
        name: this.card.name,
        craft: this.card.craft,
      } as CardDeactivateData,
      autoFocus: false,
    });
  }
}
