import {
  MockHeaderActionBarComponent,
  MockCardDetailsComponent,
  SharedSpies,
  MockPageContentComponent,
} from '@svportal/shared/testing';
import { CardDetailResponse } from '@svportal/shared/types/api/card-detail-response';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestcraftDetailComponent } from './forestcraft-detail.component';
import { of } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';

describe('ForestcraftDetailComponent', () => {
  let component: ForestcraftDetailComponent;
  let fixture: ComponentFixture<ForestcraftDetailComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
      declarations: [
        ForestcraftDetailComponent,
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
    fixture = TestBed.createComponent(ForestcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
