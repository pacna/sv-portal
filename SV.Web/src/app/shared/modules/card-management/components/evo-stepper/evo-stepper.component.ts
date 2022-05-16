// Angular
import { Component, OnInit, ViewChild } from '@angular/core';

// Third party
import { filter } from 'rxjs';

// Shared
import { CardType } from '@svportal/shared/types/customs/card-type.enum';
import { EvoSpecs } from '@svportal/shared/types/customs/evo-specs';

// Self
import {
  CardEditEventService,
  CardManagementEventService,
} from '../../services';
import { CardEditEvent, EvoStepper, IManagementStepper } from '../../types';
import { CardManagementEvent } from '../../types/card-management-event';

@Component({
  selector: 'evo-stepper',
  templateUrl: './evo-stepper.component.html',
  styleUrls: ['./evo-stepper.component.scss'],
})
export class EvoStepperComponent
  implements OnInit, IManagementStepper<EvoStepper>
{
  @ViewChild('base') base: IManagementStepper<EvoSpecs>;
  @ViewChild('evolved') evolved: IManagementStepper<EvoSpecs>;
  evoBase: EvoSpecs;
  evoEvolved: EvoSpecs;
  isSelectedFollower: boolean = false;
  readonly baseHeader: string = 'Base';
  readonly evolvedHeader: string = 'Evolved';
  constructor(
    private readonly eventService: CardManagementEventService,
    private readonly eventEditService: CardEditEventService
  ) {}

  ngOnInit(): void {
    this.handler();
  }

  public isValid(): boolean {
    return this.base?.isValid() && (this.evolved?.isValid() ?? true);
  }

  public getValue(): EvoStepper {
    return {
      base: this.base.getValue(),
      evolved: this.evolved?.getValue(),
    };
  }

  private handler(): void {
    this.eventService
      .listener()
      .pipe(filter(Boolean))
      .subscribe((event: CardManagementEvent) => {
        this.handleMessage(event);
      });

    this.eventEditService
      .listener()
      .pipe(filter(Boolean))
      .subscribe((event: CardEditEvent) => {
        this.handleEditMessage(event);
      });
  }

  private handleMessage(event: CardManagementEvent): void {
    this.isSelectedFollower = event.type === CardType.follower;
  }

  private handleEditMessage(event: CardEditEvent): void {
    const { evo } = event;
    this.evoBase = evo.base;
    this.evoEvolved = evo.evolved;
    this.isSelectedFollower = !!evo.evolved;
  }
}
