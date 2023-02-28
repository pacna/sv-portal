// Angular
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

// Third party
import { filter } from 'rxjs';

// Self
import { CardEditEventService } from '../../services/card-edit-event.service';
import { CardEditEvent, IFormValue } from '../../types';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'audio-stepper',
  templateUrl: './audio-stepper.component.html',
  styleUrls: ['./audio-stepper.component.scss'],
})
export class AudioStepperComponent implements OnInit, IFormValue<string[]> {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  private audioLocationToAddCtrl = new FormControl<string>(null);
  audios: string[] = [];
  audioStepperFormGroup = new FormGroup({
    audioLocationToAdd: this.audioLocationToAddCtrl,
  });
  constructor(private readonly eventEditService: CardEditEventService) {}

  ngOnInit(): void {
    this.handler();
  }

  addAudio(event: MatChipInputEvent): void {
    if (event?.value && !this.audios.includes(event.value)) {
      this.audios.push(event.value);
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
