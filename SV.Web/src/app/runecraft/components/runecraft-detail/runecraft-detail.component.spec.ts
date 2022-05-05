import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsApiService } from '@svportal/shared/services';
import {
  MockCardDetailsComponent,
  MockHeaderActionBarComponent,
  MockPageContentComponent,
  SharedSpies,
} from '@svportal/shared/testing';
import { CardDetailResponse } from '@svportal/shared/types/api/card-detail-response';
import { of } from 'rxjs';
import { RunecraftDetailComponent } from './runecraft-detail.component';

describe('RunecraftDetailComponent', () => {
  let component: RunecraftDetailComponent;
  let fixture: ComponentFixture<RunecraftDetailComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
      declarations: [
        RunecraftDetailComponent,
        MockHeaderActionBarComponent,
        MockCardDetailsComponent,
        MockPageContentComponent,
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
    fixture = TestBed.createComponent(RunecraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
