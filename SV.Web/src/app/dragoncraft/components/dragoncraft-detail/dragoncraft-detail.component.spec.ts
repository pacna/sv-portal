// Angular
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Shared
import { MockBaseDetailComponent } from '@svportal/shared/testing';

// Self
import { DragoncraftDetailComponent } from './dragoncraft-detail.component';

describe('DragoncraftDetailComponent', () => {
  let component: DragoncraftDetailComponent;
  let fixture: ComponentFixture<DragoncraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DragoncraftDetailComponent, MockBaseDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoncraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
