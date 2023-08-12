// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Self
import {
  MockCardDescriptionComponent,
  MockFollowerDescriptionComponent,
} from './../../../../testing/shared-mocks.spec';
import { CardDetailsComponent } from './card-details.component';
import { CardCostPipe } from '../../pipes';

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
