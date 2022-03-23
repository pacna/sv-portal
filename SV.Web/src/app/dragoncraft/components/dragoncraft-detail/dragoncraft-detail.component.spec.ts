import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoncraftDetailComponent } from './dragoncraft-detail.component';

describe('DragoncraftDetailComponent', () => {
  let component: DragoncraftDetailComponent;
  let fixture: ComponentFixture<DragoncraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragoncraftDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoncraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
