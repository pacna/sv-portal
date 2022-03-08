import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestcraftOverviewComponent } from './forestcraft-overview.component';

describe('ForestcraftOverviewComponent', () => {
  let component: ForestcraftOverviewComponent;
  let fixture: ComponentFixture<ForestcraftOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestcraftOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestcraftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
