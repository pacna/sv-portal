import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Craft } from '../../types/customs/craft.enum';
import { CardsApiService } from '../../services/cards-api.service';
import { SharedSpies } from '../../testing/shared-spies.spec';

import { CardManagementComponent } from './card-management.component';
import { CardManagementData } from './types';
import {
  MockAudioStepperComponent,
  MockCardStepperComponent,
  MockEvoStepperComponent,
} from './testing/card-management-mocks.spec';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

describe('CardManagementComponent', () => {
  let component: CardManagementComponent;
  let fixture: ComponentFixture<CardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        MatStepperModule,
        BrowserAnimationsModule,
        MatIconModule,
      ],
      declarations: [
        CardManagementComponent,
        MockCardStepperComponent,
        MockEvoStepperComponent,
        MockAudioStepperComponent,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: SharedSpies.createMatDialogRefSpy(),
        },
        {
          provide: CardsApiService,
          useValue: SharedSpies.createCardApiServiceSpy(),
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { craft: Craft.forestcraft } as CardManagementData,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
