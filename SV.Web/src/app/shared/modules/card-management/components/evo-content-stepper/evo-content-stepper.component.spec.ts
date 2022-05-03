import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardManagementEventService } from '../../services';
import { MockEvoCardEditorComponent } from '../../testing';

import { EvoContentStepperComponent } from './evo-content-stepper.component';

describe('EvoContentStepperComponent', () => {
  let component: EvoContentStepperComponent;
  let fixture: ComponentFixture<EvoContentStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [EvoContentStepperComponent, MockEvoCardEditorComponent],
      providers: [CardManagementEventService],
    }).compileComponents();
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
