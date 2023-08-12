// Angular
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Shared
import { MockBaseDetailComponent } from '@svportal/shared/testing';

// Self
import { SwordcraftDetailComponent } from './swordcraft-detail.component';

describe('SwordcraftDetailComponent', () => {
  let component: SwordcraftDetailComponent;
  let fixture: ComponentFixture<SwordcraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SwordcraftDetailComponent, MockBaseDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwordcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
