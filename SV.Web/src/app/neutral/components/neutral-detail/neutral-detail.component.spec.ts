// Angular
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatDialogModule } from '@angular/material/dialog';

// Third party
import { of } from 'rxjs';

// Shared
import {
  MockHeaderActionBarComponent,
  MockCardDetailsComponent,
  SharedSpies,
  MockPageContentComponent,
} from '@svportal/shared/testing';
import { CardDetailResponse } from '@svportal/shared/types/api/card-detail-response';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';

// Self
import { NeutralDetailComponent } from './neutral-detail.component';

describe('NeutralDetailComponent', () => {
  let component: NeutralDetailComponent;
  let fixture: ComponentFixture<NeutralDetailComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
      declarations: [
        NeutralDetailComponent,
        MockHeaderActionBarComponent,
        MockCardDetailsComponent,
        MockPageContentComponent,
      ],
      providers: [
        {
          provide: CardsApiService,
          useValue: SharedSpies.createCardApiServiceSpy(),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    cardsApiService = TestBed.inject(
      CardsApiService
    ) as jasmine.SpyObj<CardsApiService>;
    cardsApiService.getCard.and.returnValue(of({} as CardDetailResponse));
    fixture = TestBed.createComponent(NeutralDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
