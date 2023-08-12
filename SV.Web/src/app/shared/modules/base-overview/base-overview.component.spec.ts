// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

// Third party
import { of } from 'rxjs';

// Shared
import { CardsApiService } from '../../services';
import { SharedSpies } from '../../testing';
import { PageContentComponent } from '../../components/page-content';
import { HeaderActionBarComponent } from '../../components/header-action-bar';

// Self
import { BaseOverviewComponent } from './base-overview.component';
import { MockCardsFilterSearchComponent, MockSVListComponent } from './testing';

describe('BaseOverviewComponent', () => {
  let component: BaseOverviewComponent;
  let fixture: ComponentFixture<BaseOverviewComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatDialogModule,
        MatIconModule,
        PageContentComponent,
        HeaderActionBarComponent,
      ],
      declarations: [
        BaseOverviewComponent,
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
    fixture = TestBed.createComponent(BaseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
