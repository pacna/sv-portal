import { MatGridListModule } from '@angular/material/grid-list';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVListComponent } from './sv-list.component';

describe('SVListComponent', () => {
  let component: SVListComponent;
  let fixture: ComponentFixture<SVListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatGridListModule],
      declarations: [SVListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SVListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
