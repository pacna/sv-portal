import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import {
  MockCardDetailsComponent,
  MockHeaderActionBarComponent,
  MockPageContentComponent,
  SharedSpies,
} from '@svportal/shared/testing';
import { CardDetailResponse } from '@svportal/shared/types/api';
import { of } from 'rxjs';
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
