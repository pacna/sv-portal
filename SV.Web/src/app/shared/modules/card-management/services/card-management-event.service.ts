// Angular
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Self
import { CardManagementEvent } from '../types/card-management-event';

@Injectable()
export class CardManagementEventService {
  private event$: BehaviorSubject<CardManagementEvent> =
    new BehaviorSubject<CardManagementEvent>(null);
  private eventObs$: Observable<CardManagementEvent> =
    this.event$.asObservable();
  constructor() {}

  send(event: CardManagementEvent): void {
    this.event$.next(event);
  }

  listener(): Observable<CardManagementEvent> {
    return this.eventObs$;
  }

  clearCache(): void {
    this.event$.next(null);
  }
}
