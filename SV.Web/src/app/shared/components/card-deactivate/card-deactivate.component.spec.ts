import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { CardDeactivateData, Craft } from '../../types/customs';
import { CardsApiService } from '../../services/cards-api.service';
import { SharedSpies } from '../../testing/shared-spies.spec';

import { CardDeactivateComponent } from './card-deactivate.component';

describe('CardDeactivateComponent', () => {
  let component: CardDeactivateComponent;
  let fixture: ComponentFixture<CardDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule, RouterTestingModule],
      declarations: [CardDeactivateComponent],
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
          useValue: {
            id: '123',
            name: 'Quickblader',
            craft: Craft.swordcraft,
          } as CardDeactivateData,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
