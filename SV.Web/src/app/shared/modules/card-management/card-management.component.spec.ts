// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

// Shared
import { Craft } from '@svportal/shared/types/customs/craft.enum';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { SharedSpies } from '@svportal/shared/testing/shared-spies.spec';

// Self
import { CardManagementComponent } from './card-management.component';
import { CardManagementData } from './types';
import {
  MockAudioStepperComponent,
  MockCardStepperComponent,
  MockEvoStepperComponent,
} from './testing/card-management-mocks.spec';
import { CardEditEventService, CardManagementEventService } from './services';

describe('CardManagementComponent', () => {
  let component: CardManagementComponent;
  let fixture: ComponentFixture<CardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatStepperModule, BrowserAnimationsModule, MatIconModule],
      declarations: [
        CardManagementComponent,
        MockCardStepperComponent,
        MockEvoStepperComponent,
        MockAudioStepperComponent,
      ],
      providers: [
        CardManagementEventService,
        CardEditEventService,
        {
          provide: MatDialogRef,
          useValue: SharedSpies.createMatDialogRefSpy(),
        },
        {
          provide: MatSnackBar,
          useValue: SharedSpies.createMatSnackBarSpy(),
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
