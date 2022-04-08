import { SharedSpies } from './../../../shared/testing/shared-spies.spec';
import {
  MockHeaderActionBarComponent,
  MockLoadingContentComponent,
  MockSVListComponent,
} from './../../../shared/testing/shared-mocks.spec';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalcraftOverviewComponent } from './portalcraft-overview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('PortalcraftOverviewComponent', () => {
  let component: PortalcraftOverviewComponent;
  let fixture: ComponentFixture<PortalcraftOverviewComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        PortalcraftOverviewComponent,
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
    fixture = TestBed.createComponent(PortalcraftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
