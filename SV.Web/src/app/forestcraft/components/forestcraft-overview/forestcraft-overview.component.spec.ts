import {
  MockCardsFilterSearchComponent,
  MockHeaderActionBarComponent,
  MockLoadingContentComponent,
  MockSVListComponent,
} from './../../../shared/testing/shared-mocks.spec';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedSpies } from './../../../shared/testing/shared-spies.spec';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestcraftOverviewComponent } from './forestcraft-overview.component';
import { of } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';

describe('ForestcraftOverviewComponent', () => {
  let component: ForestcraftOverviewComponent;
  let fixture: ComponentFixture<ForestcraftOverviewComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatIconModule,
      ],
      declarations: [
        ForestcraftOverviewComponent,
        MockHeaderActionBarComponent,
        MockLoadingContentComponent,
        MockSVListComponent,
        MockCardsFilterSearchComponent,
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
    fixture = TestBed.createComponent(ForestcraftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
