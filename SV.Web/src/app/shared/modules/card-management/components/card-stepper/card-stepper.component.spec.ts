import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStepperComponent } from './card-stepper.component';

describe('CardStepperComponent', () => {
  let component: CardStepperComponent;
  let fixture: ComponentFixture<CardStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
