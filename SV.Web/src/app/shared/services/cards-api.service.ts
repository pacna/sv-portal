import { CardResponse } from './../types/card-response';
import { CardSearchRequest } from './../types/card-search-request';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsApiService {
  private readonly cardsUrlSegment: string = '/api/cards';

  constructor(private readonly http: HttpClient) {}

  searchCards(
    request: CardSearchRequest = {} as CardSearchRequest
  ): Observable<CardResponse[]> {
    const params = new URLSearchParams(Object.assign(request));

    return this.http.get<CardResponse[]>(
      `${this.cardsUrlSegment}?${params.toString()}`
    );
  }
}
