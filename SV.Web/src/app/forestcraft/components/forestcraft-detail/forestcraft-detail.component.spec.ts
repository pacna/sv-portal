import { RouterTestingModule } from '@angular/router/testing';
import { CardDetailResponse } from './../../../shared/types/api/card-detail-response';
import { SharedSpies } from './../../../shared/testing/shared-spies.spec';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestcraftDetailComponent } from './forestcraft-detail.component';
import { of } from 'rxjs';

describe('ForestcraftDetailComponent', () => {
  let component: ForestcraftDetailComponent;
  let fixture: ComponentFixture<ForestcraftDetailComponent>;
  let cardsApiService: jasmine.SpyObj<CardsApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ForestcraftDetailComponent],
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
