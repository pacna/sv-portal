import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilityHelper } from '../../../../helpers/utility-helper';
import { IFormValue } from '../../types';

@Component({
  selector: 'audio-stepper',
  templateUrl: './audio-stepper.component.html',
  styleUrls: ['./audio-stepper.component.scss'],
})
export class AudioStepperComponent implements OnInit, IFormValue<string[]> {
  private audioLocationToAddCtrl: FormControl = new FormControl(null);
  audios: string[] = [];
  audioStepperFormGroup: FormGroup = new FormGroup({
    audioLocationToAdd: this.audioLocationToAddCtrl,
  });
  constructor() {}

  ngOnInit(): void {}

  addAudio(): void {
    if (
      !UtilityHelper.isStringOrArrayEmpty(this.audioLocationToAddCtrl.value)
    ) {
      this.audios.push(this.audioLocationToAddCtrl.value);
    }
  }

  removeAudio(index: number): void {
    this.audios = [
      ...this.audios.slice(0, index),
      ...this.audios.slice(index + 1),
    ];
  }

  public getValue(): string[] {
    return this.audios;
  }
}
