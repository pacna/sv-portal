// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';

// Self
import {
  CardEditEventService,
  CardManagementEventService,
} from '../../services';
import { CardStepperComponent } from './card-stepper.component';

describe('CardStepperComponent', () => {
  let component: CardStepperComponent;
  let fixture: ComponentFixture<CardStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
      declarations: [CardStepperComponent],
      providers: [CardManagementEventService, CardEditEventService],
    }).compileComponents();
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
