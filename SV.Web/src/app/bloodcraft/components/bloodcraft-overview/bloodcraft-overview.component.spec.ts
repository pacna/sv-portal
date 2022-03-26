import {
  MockHeaderActionBarComponent,
  MockLoadingContentComponent,
  MockSVListComponent,
} from './../../../shared/testing/shared-mocks.spec';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedSpies } from './../../../shared/testing/shared-spies.spec';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodcraftOverviewComponent } from './bloodcraft-overview.component';
import { CardsApiService } from '../../../shared/services/cards-api.service';
import { of } from 'rxjs';

describe('BloodcraftOverviewComponent', () => {
  let component: BloodcraftOverviewComponent;
  let fixture: ComponentFixture<BloodcraftOverviewComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        BloodcraftOverviewComponent,
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
    fixture = TestBed.createComponent(BloodcraftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
