import {
  CardResponse,
  CardSearchRequest,
  CardDetailResponse,
} from '../types/api';
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

  getCard(id: string): Observable<CardDetailResponse> {
    return this.http.get<CardDetailResponse>(`${this.cardsUrlSegment}/${id}`);
  }
}
