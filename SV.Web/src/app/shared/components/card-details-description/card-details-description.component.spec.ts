// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardCostPipe } from '../../pipes';

// Self
import { CardDetailsDescriptionComponent } from './card-details-description.component';

describe('CardDetailsDescriptionComponent', () => {
  let component: CardDetailsDescriptionComponent;
  let fixture: ComponentFixture<CardDetailsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDetailsDescriptionComponent, CardCostPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
