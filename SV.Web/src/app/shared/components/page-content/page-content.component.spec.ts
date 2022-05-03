import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PageContentComponent } from './page-content.component';

describe('PageContentComponent', () => {
  let component: PageContentComponent;
  let fixture: ComponentFixture<PageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule],
      declarations: [PageContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
