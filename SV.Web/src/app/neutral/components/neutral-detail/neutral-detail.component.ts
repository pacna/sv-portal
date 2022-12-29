// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Material
import { MatDialog } from '@angular/material/dialog';

// Third party
import { map, Observable, of, switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

// Shared
import { CardDetailResponse } from '@svportal/shared/types/api/card-detail-response';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import {
  CardDeactivateData,
  CardResponse,
  Craft,
  PageSuccessState,
} from '@svportal/shared/types';
import { ModalConfig } from '@svportal/shared/constants';
import { CardManagementData } from '@svportal/shared/modules/card-management/types/card-management-data';

@UntilDestroy()
@Component({
  selector: 'neutral-detail',
  templateUrl: './neutral-detail.component.html',
  styleUrls: ['./neutral-detail.component.scss'],
})
export class NeutralDetailComponent implements OnInit {
  card: CardDetailResponse = {} as CardDetailResponse;
  pageSuccessState: PageSuccessState;
  neutralType: Craft = Craft.neutral;
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

  async openCardDeactivate(): Promise<void> {
    const { CardDeactivateComponent } = await import(
      '@svportal/shared/components/card-deactivate/card-deactivate.component'
    );
    this.dialog.open(CardDeactivateComponent, {
      height: ModalConfig.minHeight,
      width: ModalConfig.minWidth,
      data: {
        id: this.card.id,
        name: this.card.name,
        craft: this.neutralType,
      } as CardDeactivateData,
      autoFocus: false,
    });
  }

  async openCardManagement(): Promise<void> {
    const { CardManagementComponent } = await import(
      '@svportal/shared/modules/card-management/card-management.component'
    );
    this.dialog
      .open(CardManagementComponent, {
        autoFocus: false,
        height: ModalConfig.fullHeight,
        minWidth: ModalConfig.fullWidth,
        data: {
          craft: this.neutralType,
          card: this.card,
        } as CardManagementData,
      })
      .afterClosed()
      .pipe(
        untilDestroyed(this),
        switchMap((card: CardResponse) => {
          return card ? this.getCard(card.id) : of(null);
        })
      )
      .subscribe();
  }
}
