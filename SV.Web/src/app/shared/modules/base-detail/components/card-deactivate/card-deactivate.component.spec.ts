// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Material
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// Third party
import { of } from 'rxjs';

// Shared
import { Craft } from '../../../../types/customs';
import { CardsApiService } from '../../../../services/cards-api.service';
import { SharedSpies } from '../../../../testing/shared-spies.spec';

// Self
import { CardDeactivateComponent } from './card-deactivate.component';
import { CardDeactivateData } from '../../types/card-deactivate-data';

describe('CardDeactivateComponent', () => {
  let component: CardDeactivateComponent;
  let fixture: ComponentFixture<CardDeactivateComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<CardDeactivateData>>;
  let snackBar: jasmine.SpyObj<MatSnackBar>;

  const cardId: string = 'f52852a7-4845-4853-804d-a7122e70c77e';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CardDeactivateComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: SharedSpies.createMatDialogRefSpy<CardDeactivateData>(),
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
          useValue: {
            id: cardId,
            name: 'Quickblader',
            craft: Craft.swordcraft,
          } as CardDeactivateData,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<
      MatDialogRef<CardDeactivateData>
    >;
    snackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    cardsApiService = TestBed.inject(
      CardsApiService
    ) as jasmine.SpyObj<CardsApiService>;
    cardsApiService.deleteCard.and.returnValue(of(null));
    fixture = TestBed.createComponent(CardDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel', () => {
    // ARRANGE
    const cancelButton: HTMLElement =
      fixture.nativeElement.querySelector('button');

    // ACT
    cancelButton.click();

    // ASSERT
    expect(dialogRef.close).toHaveBeenCalledTimes(1);
  });

  it('should submit', () => {
    // ARRANGE
    const submitButton: HTMLElement =
      fixture.nativeElement.querySelectorAll('button')[1];

    // ACT
    submitButton.click();

    // ASSERT
    expect(cardsApiService.deleteCard).toHaveBeenCalledTimes(1);
    expect(dialogRef.close).toHaveBeenCalledTimes(1);
    expect(snackBar.open).toHaveBeenCalledTimes(1);
  });
});
