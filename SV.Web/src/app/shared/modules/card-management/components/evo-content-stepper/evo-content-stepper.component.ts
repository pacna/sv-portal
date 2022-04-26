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
}
