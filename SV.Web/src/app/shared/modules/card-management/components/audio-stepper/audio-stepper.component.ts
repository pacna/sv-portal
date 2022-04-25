import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'audio-stepper',
  templateUrl: './audio-stepper.component.html',
  styleUrls: ['./audio-stepper.component.scss'],
})
export class AudioStepperComponent implements OnInit {
  protected locationCtrl: FormControl = new FormControl([]);
  audioStepperFormGroup: FormGroup = new FormGroup({
    location: this.locationCtrl,
  });
  constructor() {}

  ngOnInit(): void {}
}
