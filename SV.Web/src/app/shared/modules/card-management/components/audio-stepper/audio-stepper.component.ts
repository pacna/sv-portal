// Angular
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

// Third party
import { filter } from 'rxjs';

// Shared
import { UtilityHelper } from '@svportal/shared/helpers/utility-helper';

// Self
import { CardEditEventService } from '../../services/card-edit-event.service';
import { CardEditEvent, IFormValue } from '../../types';

@Component({
  selector: 'audio-stepper',
  templateUrl: './audio-stepper.component.html',
  styleUrls: ['./audio-stepper.component.scss'],
})
export class AudioStepperComponent implements OnInit, IFormValue<string[]> {
  private audioLocationToAddCtrl: UntypedFormControl = new UntypedFormControl(null);
  audios: string[] = [];
  audioStepperFormGroup: UntypedFormGroup = new UntypedFormGroup({
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
