import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVListItemComponent } from './sv-list-item.component';

describe('SVListItemComponent', () => {
  let component: SVListItemComponent;
  let fixture: ComponentFixture<SVListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SVListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SVListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
