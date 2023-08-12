// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Self
import { EmptyContentComponent } from './empty-content.component';

describe('EmptyContentComponent', () => {
  let component: EmptyContentComponent;
  let fixture: ComponentFixture<EmptyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
