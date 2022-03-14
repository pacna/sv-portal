import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunecraftOverviewComponent } from './runecraft-overview.component';

describe('RunecraftOverviewComponent', () => {
  let component: RunecraftOverviewComponent;
  let fixture: ComponentFixture<RunecraftOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunecraftOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunecraftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
