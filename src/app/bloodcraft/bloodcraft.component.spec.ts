import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodcraftComponent } from './bloodcraft.component';

describe('BloodcraftComponent', () => {
  let component: BloodcraftComponent;
  let fixture: ComponentFixture<BloodcraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodcraftComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodcraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
