// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';

// Self
import { HeaderActionBarComponent } from './header-action-bar.component';

describe('HeaderActionBarComponent', () => {
  let component: HeaderActionBarComponent;
  let fixture: ComponentFixture<HeaderActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [HeaderActionBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
