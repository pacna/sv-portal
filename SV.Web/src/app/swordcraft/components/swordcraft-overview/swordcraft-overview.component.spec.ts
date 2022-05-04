import {
  MockCardsFilterSearchComponent,
  MockHeaderActionBarComponent,
  MockPageContentComponent,
  MockSVListComponent,
  SharedSpies,
} from '@svportal/shared/testing';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordcraftOverviewComponent } from './swordcraft-overview.component';
import { of } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

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
