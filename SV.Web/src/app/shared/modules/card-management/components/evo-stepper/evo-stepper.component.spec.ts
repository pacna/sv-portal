import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoStepperComponent } from './evo-stepper.component';

describe('EvoStepperComponent', () => {
  let component: EvoStepperComponent;
  let fixture: ComponentFixture<EvoStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvoStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
