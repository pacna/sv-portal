// Angular
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Shared
import { MockBaseDetailComponent } from '@svportal/shared/testing';

// Self
import { BloodcraftDetailComponent } from './bloodcraft-detail.component';

describe('BloodcraftDetailComponent', () => {
  let component: BloodcraftDetailComponent;
  let fixture: ComponentFixture<BloodcraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BloodcraftDetailComponent, MockBaseDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
