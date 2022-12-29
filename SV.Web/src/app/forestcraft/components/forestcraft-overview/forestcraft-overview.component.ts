// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

// Material
import { MatDrawer } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';

// Third party
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, Observable, of, switchMap } from 'rxjs';

// Shared
import { CardSearchRequest, CardResponse } from '@svportal/shared/types/api';
import {
  Craft,
  CardsFilterRequest,
  PageSuccessState,
} from '@svportal/shared/types/customs';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { UtilityHelper } from '@svportal/shared/helpers';
import { CardManagementData } from '@svportal/shared/modules/card-management/types';
import { ModalConfig } from '@svportal/shared/constants';

@UntilDestroy()
@Component({
  selector: 'forestcraft-overview',
  templateUrl: './forestcraft-overview.component.html',
  styleUrls: ['./forestcraft-overview.component.scss'],
})
export class ForestcraftOverviewComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  cards: CardResponse[] = [];
  forestCraftType: Craft = Craft.forestcraft;
  pageSuccessState: PageSuccessState;
  currentFilterRequest: CardsFilterRequest = {} as CardsFilterRequest;
  numberOfColumns: number;
  constructor(
    private readonly cardsApiService: CardsApiService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.handleScreenSize();
  }

  ngOnInit(): void {
    this.initFilterSearch().subscribe();
  }

  openFilter(): void {
    this.drawer.autoFocus = false;
    this.drawer.open();
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
        data: { craft: this.forestCraftType } as CardManagementData,
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

  private handleScreenSize(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result: BreakpointState) => {
        if (result.matches) {
          this.numberOfColumns = result.breakpoints[Breakpoints.XSmall] ? 1 : 2;
        } else {
          this.numberOfColumns = 4;
        }
      });
  }

  private initFilterSearch(): Observable<void> {
    return this.route.queryParams.pipe(
      untilDestroyed(this),
      switchMap((params: Params) => {
        this.currentFilterRequest = new CardsFilterRequest(params);
        if (!UtilityHelper.isObjEmpty(this.currentFilterRequest)) {
          return this.searchCards(
            this.currentFilterRequest.mapToRequest(this.forestCraftType)
          );
        }

        return this.searchCards();
      })
    );
  }

  private searchCards(
    request: CardSearchRequest = {
      craft: this.forestCraftType,
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
}
