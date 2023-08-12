// Angular
import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
import { CardSearchRequest, CardResponse } from './../../types/api';
import {
  Craft,
  CardsFilterRequest,
  PageSuccessState,
} from './../../types/customs';
import { CardsApiService } from './../../services/cards-api.service';
import { UtilityHelper } from './../../../shared/helpers';
import { CardManagementData } from './../../../shared/modules/card-management/types';
import { ModalConfig } from './../../../shared/constants';

@UntilDestroy()
@Component({
  selector: 'base-overview',
  templateUrl: './base-overview.component.html',
  styleUrls: ['./base-overview.component.scss'],
})
export class BaseOverviewComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  @Input() set craftName(craftName: string) {
    this.craftType = Craft[craftName];
  }
  craftType: Craft;
  cards: CardResponse[] = [];
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
        data: { craft: this.craftType } as CardManagementData,
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
            this.currentFilterRequest.mapToRequest(this.craftType)
          );
        }

        return this.searchCards();
      })
    );
  }

  private searchCards(
    request: CardSearchRequest = {
      craft: this.craftType,
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
