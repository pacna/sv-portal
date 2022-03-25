import {
  MockCardDetailsDescriptionComponent,
  MockCardDescriptionComponent,
} from './../../testing/shared-mocks.spec';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockFollowerDescriptionComponent } from '../../testing/shared-mocks.spec';

import { CardDetailsComponent } from './card-details.component';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardDetailsComponent,
        MockFollowerDescriptionComponent,
        MockCardDetailsDescriptionComponent,
        MockCardDescriptionComponent,
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
