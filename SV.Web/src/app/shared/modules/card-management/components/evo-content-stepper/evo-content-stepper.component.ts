import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EvoFollowerSpecs } from '../../../../types/customs/evo-follower-specs';
import { IFormValue, IManagementStepper } from '../../types';

@Component({
  selector: 'evo-content-stepper',
  templateUrl: './evo-content-stepper.component.html',
  styleUrls: ['./evo-content-stepper.component.scss'],
})
export class EvoContentStepperComponent
  implements OnInit, IManagementStepper<EvoFollowerSpecs>
{
  @ViewChild('abilityEditor') abilityEditor: IFormValue<string>;
  @ViewChild('flavorEditor') flavorEditor: IFormValue<string>;
  @Input() evoHeader: string;
  readonly abilityTextHeader: string = 'Ability Text';
  readonly flavorTextHeader: string = 'Flavor Text';
  private atkCtrl: FormControl = new FormControl(null);
  private defCtrl: FormControl = new FormControl(null);
  private artLocationCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  evoContentFormGroup: FormGroup = new FormGroup({
    atk: this.atkCtrl,
    def: this.defCtrl,
    artLocation: this.artLocationCtrl,
  });
  constructor() {}

  ngOnInit(): void {}

  public isValid(): boolean {
    return this.evoContentFormGroup.valid;
  }

  public getValue(): EvoFollowerSpecs {
    return {
      battleStats: {
        atk: this.atkCtrl.value,
        def: this.defCtrl.value,
      },
      artLocation: this.artLocationCtrl.value,
      abilityText: this.abilityEditor.getValue(),
      flavorText: this.flavorEditor.getValue(),
    };
  }
}
