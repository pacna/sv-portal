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

  searchComics(request: CardSearchRequest): Observable<{ name: string }> {
    const params = new URLSearchParams(Object.assign(request));

    return this.http.get<{ name: string }>(
      `${this.cardsUrlSegment}?${params.toString()}`
    );
  }
}
