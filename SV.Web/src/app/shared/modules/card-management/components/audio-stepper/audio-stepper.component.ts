import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter } from 'rxjs';
import { UtilityHelper } from '../../../../helpers/utility-helper';
import { CardEditEventService } from '../../services/card-edit-event.service';
import { CardEditEvent, IFormValue } from '../../types';

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
  constructor(private readonly eventEditService: CardEditEventService) {}

  ngOnInit(): void {
    this.handler();
  }

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

  private handler(): void {
    this.eventEditService
      .listener()
      .pipe(filter(Boolean))
      .subscribe((event: CardEditEvent) => {
        this.handleMessage(event);
      });
  }

  private handleMessage(event: CardEditEvent): void {
    this.audios = event.audios;
  }

  public getValue(): string[] {
    return this.audios;
  }
}
