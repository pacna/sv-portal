import { CardDetailResponse } from '@svportal/shared/types/api/card-detail-response';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PageSuccessState } from '@svportal/shared/types/customs/page-success-state.enum';
import { MatDialog } from '@angular/material/dialog';
import { CardDeactivateComponent } from '@svportal/shared/components/card-deactivate/card-deactivate.component';
import { ModalConfig } from '@svportal/shared/constants/modal-config';
import { CardDeactivateData } from '@svportal/shared/types/customs/card-deactivate-data';
import { CardManagementComponent } from '@svportal/shared/modules/card-management/card-management.component';
import { Craft } from '@svportal/shared/types/customs';
import { CardManagementData } from '@svportal/shared/modules/card-management/types';
import { CardResponse } from '@svportal/shared/types/api';

@UntilDestroy()
@Component({
  selector: 'swordcraft-detail',
  templateUrl: './swordcraft-detail.component.html',
  styleUrls: ['./swordcraft-detail.component.scss'],
})
export class SwordcraftDetailComponent implements OnInit {
  card: CardDetailResponse = {} as CardDetailResponse;
  pageSuccessState: PageSuccessState;
  swordCraftType: Craft = Craft.swordcraft;
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
        craft: this.swordCraftType,
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
          craft: this.swordCraftType,
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
