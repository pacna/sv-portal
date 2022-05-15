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
import { CardDeactivateComponent } from '@svportal/shared/components/card-deactivate/card-deactivate.component';
import {
  CardDeactivateData,
  CardResponse,
  Craft,
  PageSuccessState,
} from '@svportal/shared/types';
import { ModalConfig } from '@svportal/shared/constants';
import { CardManagementComponent } from '@svportal/shared/modules/card-management/card-management.component';
import { CardManagementData } from '@svportal/shared/modules/card-management/types/card-management-data';

@UntilDestroy()
@Component({
  selector: 'shadowcraft-detail',
  templateUrl: './shadowcraft-detail.component.html',
  styleUrls: ['./shadowcraft-detail.component.scss'],
})
export class ShadowcraftDetailComponent implements OnInit {
  card: CardDetailResponse = {} as CardDetailResponse;
  pageSuccessState: PageSuccessState;
  shadowCraftType: Craft = Craft.shadowcraft;
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
        craft: this.shadowCraftType,
      } as CardDeactivateData,
      autoFocus: false,
    });
  }

  openCardManagement(): void {
    this.dialog
      .open(CardManagementComponent, {
        autoFocus: false,
        height: ModalConfig.fullHeight,
        minWidth: ModalConfig.fullWidth,
        data: {
          craft: this.shadowCraftType,
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
