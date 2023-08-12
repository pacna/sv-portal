// Angular
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Material
import { MatDialog } from '@angular/material/dialog';

// Third party
import { map, Observable, of, switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

// Shared
import { CardDetailResponse } from '../../types/api/card-detail-response';
import { CardsApiService } from '../../services/cards-api.service';
import {
  CardDeactivateData,
  CardResponse,
  Craft,
  PageSuccessState,
} from '../../types';
import { ModalConfig } from '../../constants';
import { CardManagementData } from '../..//modules/card-management/types/card-management-data';

@UntilDestroy()
@Component({
  selector: 'base-detail',
  templateUrl: './base-detail.component.html',
  styleUrls: ['./base-detail.component.scss'],
})
export class BaseDetailComponent implements OnInit {
  @Input() craftType: Craft;
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

  async openCardDeactivate(): Promise<void> {
    const { CardDeactivateComponent } = await import(
      './components/card-deactivate/card-deactivate.component'
    );
    this.dialog.open(CardDeactivateComponent, {
      height: ModalConfig.minHeight,
      width: ModalConfig.minWidth,
      data: {
        id: this.card.id,
        name: this.card.name,
        craft: this.craftType,
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
          craft: this.craftType,
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
