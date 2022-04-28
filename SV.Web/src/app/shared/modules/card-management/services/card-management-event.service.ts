import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardManagementEvent } from '../types/card-management-event';

@Injectable()
export class CardManagementEventService {
  private event$ = new BehaviorSubject({} as CardManagementEvent);
  constructor() {}

  send(event: CardManagementEvent): void {
    this.event$.next(event);
  }

  listener(): Observable<CardManagementEvent> {
    return this.event$.asObservable();
  }
}
