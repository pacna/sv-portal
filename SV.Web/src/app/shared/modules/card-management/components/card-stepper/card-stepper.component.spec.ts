import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardManagementEventService } from '../../services';

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
      providers: [CardManagementEventService],
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
