// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';

// Third party
import { of } from 'rxjs';

// Shared
import {
  MockHeaderActionBarComponent,
  MockCardsFilterSearchComponent,
  MockSVListComponent,
  SharedSpies,
  MockPageContentComponent,
} from '@svportal/shared/testing';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';

// Self
import { SwordcraftOverviewComponent } from './swordcraft-overview.component';

describe('SwordcraftOverviewComponent', () => {
  let component: SwordcraftOverviewComponent;
  let fixture: ComponentFixture<SwordcraftOverviewComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDialogModule,
      ],
      declarations: [
        SwordcraftOverviewComponent,
        MockHeaderActionBarComponent,
        MockPageContentComponent,
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
    fixture = TestBed.createComponent(SwordcraftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
