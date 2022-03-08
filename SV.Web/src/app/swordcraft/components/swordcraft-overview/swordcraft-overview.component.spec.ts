import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordcraftOverviewComponent } from './swordcraft-overview.component';

describe('SwordcraftOverviewComponent', () => {
  let component: SwordcraftOverviewComponent;
  let fixture: ComponentFixture<SwordcraftOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwordcraftOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwordcraftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
