import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioStepperComponent } from './audio-stepper.component';

describe('AudioStepperComponent', () => {
  let component: AudioStepperComponent;
  let fixture: ComponentFixture<AudioStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioStepperComponent ]
    })
    .compileComponents();
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
