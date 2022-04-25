import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoContentStepperComponent } from './evo-content-stepper.component';

describe('EvoContentStepperComponent', () => {
  let component: EvoContentStepperComponent;
  let fixture: ComponentFixture<EvoContentStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvoContentStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoContentStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
