import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFilterSearchComponent } from './cards-filter-search.component';

describe('CardsFilterSearchComponent', () => {
  let component: CardsFilterSearchComponent;
  let fixture: ComponentFixture<CardsFilterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsFilterSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
