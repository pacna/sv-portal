import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodcraftDetailComponent } from './bloodcraft-detail.component';

describe('BloodcraftDetailComponent', () => {
  let component: BloodcraftDetailComponent;
  let fixture: ComponentFixture<BloodcraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodcraftDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
