import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AudioStepperComponent } from './audio-stepper.component';

describe('AudioStepperComponent', () => {
  let component: AudioStepperComponent;
  let fixture: ComponentFixture<AudioStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatChipsModule,
        BrowserAnimationsModule,
      ],
      declarations: [AudioStepperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
