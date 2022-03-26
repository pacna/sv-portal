import {
  MockCardDetailsComponent,
  MockHeaderActionBarComponent,
  MockLoadingContentComponent,
} from './../../../shared/testing/shared-mocks.spec';
import { RouterTestingModule } from '@angular/router/testing';
import { CardDetailResponse } from './../../../shared/types/api/card-detail-response';
import { SharedSpies } from './../../../shared/testing/shared-spies.spec';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordcraftDetailComponent } from './swordcraft-detail.component';
import { of } from 'rxjs';

describe('SwordcraftDetailComponent', () => {
  let component: SwordcraftDetailComponent;
  let fixture: ComponentFixture<SwordcraftDetailComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        SwordcraftDetailComponent,
        MockHeaderActionBarComponent,
        MockLoadingContentComponent,
        MockCardDetailsComponent,
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
    fixture = TestBed.createComponent(SwordcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
