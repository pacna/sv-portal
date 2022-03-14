import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunecraftDetailComponent } from './runecraft-detail.component';

describe('RunecraftDetailComponent', () => {
  let component: RunecraftDetailComponent;
  let fixture: ComponentFixture<RunecraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunecraftDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunecraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
