import { CardSearchRequest, CardResponse } from '@svportal/shared/types/api';
import { Craft, CardsFilterRequest } from '@svportal/shared/types/customs';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UtilityHelper } from '@svportal/shared/helpers';

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
          return this.searchCards(this.currentFilterRequest.mapToRequest(this.forestCraftType));
        }

        return this.searchCards();
      })
    );
  }

  searchCards(
    request: CardSearchRequest = {
      craft: this.forestCraftType,
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
    return this.cards.length > 0;
  }

  handleCardInfo(info: Pick<CardResponse, 'id' | 'craft'>): void {
    this.router.navigateByUrl(`${Craft[info.craft]}/${info.id}`);
  }
}
