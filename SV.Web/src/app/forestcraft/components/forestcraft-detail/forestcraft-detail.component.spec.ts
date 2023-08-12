// Angular
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Shared
import { MockBaseDetailComponent } from '@svportal/shared/testing';

// Self
import { ForestcraftDetailComponent } from './forestcraft-detail.component';

describe('ForestcraftDetailComponent', () => {
  let component: ForestcraftDetailComponent;
  let fixture: ComponentFixture<ForestcraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ForestcraftDetailComponent, MockBaseDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
