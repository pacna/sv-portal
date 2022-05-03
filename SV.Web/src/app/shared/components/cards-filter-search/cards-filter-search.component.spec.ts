import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CardsFilterSearchComponent } from './cards-filter-search.component';
import { MatIconModule } from '@angular/material/icon';

describe('CardsFilterSearchComponent', () => {
  let component: CardsFilterSearchComponent;
  let fixture: ComponentFixture<CardsFilterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatChipsModule,
      ],
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
