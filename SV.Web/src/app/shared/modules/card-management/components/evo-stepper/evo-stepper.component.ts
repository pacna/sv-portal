import { Component, OnInit, ViewChild } from '@angular/core';
import { EvoFollowerSpecs } from '../../../../types/customs/evo-follower-specs';
import { EvoStepper, IManagementStepper } from '../../types';

@Component({
  selector: 'evo-stepper',
  templateUrl: './evo-stepper.component.html',
  styleUrls: ['./evo-stepper.component.scss'],
})
export class EvoStepperComponent
  implements OnInit, IManagementStepper<EvoStepper>
{
  @ViewChild('base') base: IManagementStepper<EvoFollowerSpecs>;
  @ViewChild('evolved') evolved: IManagementStepper<EvoFollowerSpecs>;
  readonly baseHeader: string = 'Base';
  readonly evolvedHeader: string = 'Evolved';
  constructor() {}

  ngOnInit(): void {}

  public isValid(): boolean {
    return this.base.isValid() && this.evolved.isValid();
  }

  public getValue(): EvoStepper {
    return {
      base: this.base.getValue(),
      evolved: this.evolved.getValue(),
    };
  }
}
