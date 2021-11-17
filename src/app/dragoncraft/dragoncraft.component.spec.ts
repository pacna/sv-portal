import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoncraftComponent } from './dragoncraft.component';

describe('DragoncraftComponent', () => {
  let component: DragoncraftComponent;
  let fixture: ComponentFixture<DragoncraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragoncraftComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoncraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
