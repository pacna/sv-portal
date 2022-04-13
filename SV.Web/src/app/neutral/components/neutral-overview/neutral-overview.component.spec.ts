import { SharedSpies } from './../../../shared/testing/shared-spies.spec';
import {
  MockHeaderActionBarComponent,
  MockLoadingContentComponent,
  MockSVListComponent,
} from './../../../shared/testing/shared-mocks.spec';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralOverviewComponent } from './neutral-overview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('NeutralOverviewComponent', () => {
  let component: NeutralOverviewComponent;
  let fixture: ComponentFixture<NeutralOverviewComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        NeutralOverviewComponent,
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
    fixture = TestBed.createComponent(NeutralOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
