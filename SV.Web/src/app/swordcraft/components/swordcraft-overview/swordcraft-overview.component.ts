import { CardSearchRequest, CardResponse } from '@svportal/shared/types/api';
import { Craft } from '@svportal/shared/types/customs/craft.enum';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDrawer } from '@angular/material/sidenav';
import { CardsFilterRequest } from '@svportal/shared/types/customs/cards-filter-request';
import { UtilityHelper } from '@svportal/shared/helpers';

@UntilDestroy()
@Component({
  selector: 'swordcraft-overview',
  templateUrl: './swordcraft-overview.component.html',
  styleUrls: ['./swordcraft-overview.component.scss'],
})
export class SwordcraftOverviewComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  cards: CardResponse[] = [];
  swordCraftType: Craft = Craft.swordcraft;
  currentFilterRequest: CardsFilterRequest = {} as CardsFilterRequest;
  constructor(
    private readonly cardsApiService: CardsApiService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
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
            this.currentFilterRequest.mapToRequest(this.swordCraftType)
          );
        }

        return this.searchCards();
      })
    );
  }

  searchCards(
    request: CardSearchRequest = {
      craft: this.swordCraftType,
    } as CardSearchRequest
  ): Observable<void> {
    return this.cardsApiService.searchCards(request).pipe(
      untilDestroyed(this),
      map((response: CardResponse[]) => {
        this.cards = response;
      })
    );
  }

  handleFilterRequest(filterRequest: CardsFilterRequest): void {
    this.drawer.close();

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: filterRequest,
    });
  }

  hasCards(): boolean {
    return !UtilityHelper.isStringOrArrayEmpty(this.cards);
  }

  handleCardInfo(info: Pick<CardResponse, 'id' | 'craft'>): void {
    this.router.navigateByUrl(`${Craft[info.craft]}/${info.id}`);
  }
}
