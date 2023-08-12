// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Material
import { MatDialogModule } from '@angular/material/dialog';

// Third party
import { of } from 'rxjs';

// Shared
import { CardsApiService } from '../../services';
import { SharedSpies } from '../../testing';
import { PageContentComponent } from '../../components/page-content';
import { HeaderActionBarComponent } from '../../components/header-action-bar';
import { CardDetailResponse } from '../../types/api';

// Self
import { MockCardDetailsComponent } from './testing';
import { BaseDetailComponent } from './base-detail.component';

describe('BaseDetailComponent', () => {
  let component: BaseDetailComponent;
  let fixture: ComponentFixture<BaseDetailComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        PageContentComponent,
        HeaderActionBarComponent,
      ],
      declarations: [BaseDetailComponent, MockCardDetailsComponent],
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
    fixture = TestBed.createComponent(BaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
