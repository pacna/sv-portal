import {
  CardResponse,
  CardSearchRequest,
  CardDetailResponse,
} from '../types/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsApiService {
  private readonly cardsUrlSegment: string = '/api/cards';

  constructor(private readonly http: HttpClient) {}

  searchCards(request: CardSearchRequest): Observable<CardResponse[]> {
    const querySegments: string[] = [];

    if (request.craft || request.craft === 0) {
      querySegments.push(`craft=${request.craft}`);
    }

    if (request.name) {
      querySegments.push(`name=${request.name}`);
    }

    if (request.rarities) {
      for (const rarity of request.rarities) {
        querySegments.push(`rarities=${rarity}`);
      }
    }

    if (request.types) {
      for (const type of request.types) {
        querySegments.push(`types=${type}`);
      }
    }

    return this.http.get<CardResponse[]>(
      `${this.cardsUrlSegment}?${querySegments.join('&')}`
    );
  }

  getCard(id: string): Observable<CardDetailResponse> {
    return this.http.get<CardDetailResponse>(`${this.cardsUrlSegment}/${id}`);
  }
}
