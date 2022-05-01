import { Component, OnInit, ViewChild } from '@angular/core';
import { CardType } from '../../../../types/customs/card-type.enum';
import { EvoSpecs } from '../../../../types/customs/evo-specs';
import { CardManagementEventService } from '../../services';
import { EvoStepper, IManagementStepper } from '../../types';
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
  isSelectedFollower: boolean = false;
  readonly baseHeader: string = 'Base';
  readonly evolvedHeader: string = 'Evolved';
  constructor(private readonly eventService: CardManagementEventService) {}

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
    this.eventService.listener().subscribe((event: CardManagementEvent) => {
      this.handleMessage(event);
    });
  }

  private handleMessage(event: CardManagementEvent): void {
    this.isSelectedFollower = event?.type === CardType.follower;
  }
}
