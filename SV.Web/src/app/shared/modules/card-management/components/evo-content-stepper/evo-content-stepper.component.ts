import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'evo-content-stepper',
  templateUrl: './evo-content-stepper.component.html',
  styleUrls: ['./evo-content-stepper.component.scss'],
})
export class EvoContentStepperComponent implements OnInit {
  @Input() evoHeader: string;
  readonly abilityTextHeader: string = 'Ability Text';
  readonly flavorTextHeader: string = 'Flavor Text';
  protected atkCtrl: FormControl = new FormControl(null);
  protected defCtrl: FormControl = new FormControl(null);
  protected artLocationCtrl: FormControl = new FormControl(null, [
    Validators.required,
  ]);
  evoContentFormGroup: FormGroup = new FormGroup({
    atk: this.atkCtrl,
    def: this.defCtrl,
    artLocation: this.artLocationCtrl,
  });
  constructor() {}

  ngOnInit(): void {}
}
