import {
  MockHeaderActionBarComponent,
  MockLoadingContentComponent,
  MockSVListComponent,
  SharedSpies,
} from '@svportal/shared/testing';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavencraftOverviewComponent } from './havencraft-overview.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('HavencraftOverviewComponent', () => {
  let component: HavencraftOverviewComponent;
  let fixture: ComponentFixture<HavencraftOverviewComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        HavencraftOverviewComponent,
        MockHeaderActionBarComponent,
        MockLoadingContentComponent,
        MockSVListComponent,
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
    cardsApiService.searchCards.and.returnValue(of([]));
    fixture = TestBed.createComponent(HavencraftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
