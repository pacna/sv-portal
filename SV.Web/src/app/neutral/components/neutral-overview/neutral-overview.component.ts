import { CardSearchRequest, CardResponse } from '@svportal/shared/types/api';
import { Craft } from '@svportal/shared/types/customs/craft.enum';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDrawer } from '@angular/material/sidenav';
import {
  CardsFilterRequest,
  PageSuccessState,
} from '@svportal/shared/types/customs';
import { MatDialog } from '@angular/material/dialog';
import { UtilityHelper } from '@svportal/shared/helpers';
import { CardManagementComponent } from '@svportal/shared/modules/card-management/card-management.component';
import { ModalConfig } from '@svportal/shared/constants';
import { CardManagementData } from '@svportal/shared/modules/card-management/types/card-management-data';

@UntilDestroy()
@Component({
  selector: 'neutral-overview',
  templateUrl: './neutral-overview.component.html',
  styleUrls: ['./neutral-overview.component.scss'],
})
export class NeutralOverviewComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  cards: CardResponse[] = [];
  neutralType: Craft = Craft.neutral;
  pageSuccessState: PageSuccessState;
  currentFilterRequest: CardsFilterRequest = {} as CardsFilterRequest;
  constructor(
    private readonly cardsApiService: CardsApiService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initFilterSearch().subscribe();
  }

  openFilter(): void {
    this.drawer.autoFocus = false;
    this.drawer.open();
  }

  initFilterSearch(): Observable<void> {
    return this.route.queryParams.pipe(
      untilDestroyed(this),
      switchMap((params: Params) => {
        this.currentFilterRequest = new CardsFilterRequest(params);
        if (!UtilityHelper.isObjEmpty(this.currentFilterRequest)) {
          return this.searchCards(
            this.currentFilterRequest.mapToRequest(this.neutralType)
          );
        }

        return this.searchCards();
      })
    );
  }

  searchCards(
    request: CardSearchRequest = {
      craft: this.neutralType,
    } as CardSearchRequest
  ): Observable<void> {
    return this.cardsApiService.searchCards(request).pipe(
      untilDestroyed(this),
      map((response: CardResponse[]) => {
        this.cards = response;
        this.pageSuccessState = UtilityHelper.isStringOrArrayEmpty(response)
          ? PageSuccessState.empty
          : PageSuccessState.exist;
      })
    );
  }

  openCardManagement(): void {
    this.dialog
      .open(CardManagementComponent, {
        autoFocus: false,
        height: ModalConfig.fullHeight,
        minWidth: ModalConfig.fullWidth,
        data: { craft: this.neutralType } as CardManagementData,
      })
      .afterClosed()
      .pipe(
        untilDestroyed(this),
        switchMap((card: CardResponse) => {
          return card ? this.initFilterSearch() : of(null);
        })
      )
      .subscribe();
  }

  handleFilterRequest(filterRequest: CardsFilterRequest): void {
    this.drawer.close();

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: filterRequest,
    });
  }

  handleCardInfo(info: Pick<CardResponse, 'id' | 'craft'>): void {
    this.router.navigateByUrl(`${Craft[info.craft]}/${info.id}`);
  }
}
