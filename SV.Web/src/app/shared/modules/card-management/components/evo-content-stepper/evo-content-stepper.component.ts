import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BattleStats } from '../../../../types/customs/battle-stats';
import { CardType } from '../../../../types/customs/card-type.enum';
import { EvoFollowerSpecs } from '../../../../types/customs/evo-follower-specs';
import { CardManagementEventService } from '../../services';
import { IFormValue, IManagementStepper } from '../../types';
import { CardManagementEvent } from '../../types/card-management-event';

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
  isSelectedFollower: boolean = false;
  constructor(private readonly eventService: CardManagementEventService) {}

  ngOnInit(): void {
    this.handler();
  }

  public isValid(): boolean {
    return this.evoContentFormGroup.valid;
  }

  public getValue(): EvoFollowerSpecs {
    return {
      battleStats: this.createBattleStats(),
      artLocation: this.artLocationCtrl.value,
      abilityText: this.abilityEditor.getValue(),
      flavorText: this.flavorEditor.getValue(),
    };
  }

  createBattleStats(): BattleStats {
    return this.atkCtrl.value && this.defCtrl.value
      ? { atk: this.atkCtrl.value, def: this.defCtrl.value }
      : null;
  }

  private handler(): void {
    this.eventService.listener().subscribe((event: CardManagementEvent) => {
      this.handleMessage(event);
    });
  }

  private handleMessage(event: CardManagementEvent): void {
    if (event?.type === CardType.follower) {
      this.isSelectedFollower = true;
      this.atkCtrl.setValidators([Validators.required]);
      this.atkCtrl.updateValueAndValidity();
      this.defCtrl.setValidators([Validators.required]);
      this.defCtrl.updateValueAndValidity();
    } else {
      this.isSelectedFollower = false;
      this.atkCtrl.setValidators(null);
      this.atkCtrl.updateValueAndValidity();
      this.defCtrl.setValidators(null);
      this.defCtrl.updateValueAndValidity();
    }
  }
}
