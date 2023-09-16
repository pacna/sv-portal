// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Self
import { CardDetailsComponent } from './card-details.component';
import { CardCostPipe } from '../../pipes';
import {
  MockCardDescriptionComponent,
  MockFollowerDescriptionComponent,
} from '../../testing/base-detail-mocks.spec';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardDetailsComponent,
        MockFollowerDescriptionComponent,
        MockCardDescriptionComponent,
        CardCostPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
