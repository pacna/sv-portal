import { FollowerDescription } from './../../types/customs/follower-description';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerDetailDescriptionComponent } from './follower-detail-description.component';

describe('FollowerDetailDescriptionComponent', () => {
  let component: FollowerDetailDescriptionComponent;
  let fixture: ComponentFixture<FollowerDetailDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowerDetailDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerDetailDescriptionComponent);
    component = fixture.componentInstance;
    component.followerDescription = { atk: 0, def: 0 } as FollowerDescription;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
