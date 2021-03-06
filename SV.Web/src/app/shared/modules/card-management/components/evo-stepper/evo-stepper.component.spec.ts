// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Self
import {
  CardEditEventService,
  CardManagementEventService,
} from '../../services';
import { MockEvoContentStepperComponent } from '../../testing';
import { EvoStepperComponent } from './evo-stepper.component';

describe('EvoStepperComponent', () => {
  let component: EvoStepperComponent;
  let fixture: ComponentFixture<EvoStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvoStepperComponent, MockEvoContentStepperComponent],
      providers: [CardManagementEventService, CardEditEventService],
    }).compileComponents();
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
