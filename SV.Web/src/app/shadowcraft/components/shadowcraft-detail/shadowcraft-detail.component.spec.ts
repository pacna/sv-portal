// Angular
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Shared
import { MockBaseDetailComponent } from '@svportal/shared/testing';

// Self
import { ShadowcraftDetailComponent } from './shadowcraft-detail.component';

describe('ShadowcraftDetailComponent', () => {
  let component: ShadowcraftDetailComponent;
  let fixture: ComponentFixture<ShadowcraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ShadowcraftDetailComponent, MockBaseDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
