// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Self
import { SVLayoutComponent } from './sv-layout.component';

describe('SVLayoutComponent', () => {
  let component: SVLayoutComponent;
  let fixture: ComponentFixture<SVLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SVLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SVLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
