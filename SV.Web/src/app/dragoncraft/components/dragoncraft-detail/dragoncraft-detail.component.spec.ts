import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import {
  MockCardDetailsComponent,
  MockHeaderActionBarComponent,
  MockPageContentComponent,
  SharedSpies,
} from '@svportal/shared/testing';
import { CardDetailResponse } from '@svportal/shared/types';
import { of } from 'rxjs';
import { DragoncraftDetailComponent } from './dragoncraft-detail.component';

describe('DragoncraftDetailComponent', () => {
  let component: DragoncraftDetailComponent;
  let fixture: ComponentFixture<DragoncraftDetailComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
      declarations: [
        DragoncraftDetailComponent,
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
    fixture = TestBed.createComponent(DragoncraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
