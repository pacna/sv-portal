import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavencraftComponent } from './havencraft.component';

describe('HavencraftComponent', () => {
  let component: HavencraftComponent;
  let fixture: ComponentFixture<HavencraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HavencraftComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavencraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
