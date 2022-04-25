import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evo-stepper',
  templateUrl: './evo-stepper.component.html',
  styleUrls: ['./evo-stepper.component.scss'],
})
export class EvoStepperComponent implements OnInit {
  readonly baseHeader: string = 'Base';
  readonly evolvedHeader: string = 'Evolved';
  constructor() {}

  ngOnInit(): void {}
}
