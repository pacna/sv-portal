import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardEditEvent } from '../types/card-edit-event';

@Injectable()
export class CardEditEventService {
  private event$: BehaviorSubject<CardEditEvent> =
    new BehaviorSubject<CardEditEvent>(null);
  private eventObs$: Observable<CardEditEvent> = this.event$.asObservable();
  constructor() {}

  send(event: CardEditEvent): void {
    this.event$.next(event);
  }

  listener(): Observable<CardEditEvent> {
    return this.eventObs$;
  }

  clearCache(): void {
    this.event$.next(null);
  }
}
