import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockFollowerDetailDescriptionComponent } from '../../testing/shared-mocks.spec';

import { FollowerDescriptionComponent } from './follower-description.component';

describe('FollowerDescriptionComponent', () => {
  let component: FollowerDescriptionComponent;
  let fixture: ComponentFixture<FollowerDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FollowerDescriptionComponent,
        MockFollowerDetailDescriptionComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
