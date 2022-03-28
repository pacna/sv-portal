import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavencraftDetailComponent } from './havencraft-detail.component';

describe('HavencraftDetailComponent', () => {
  let component: HavencraftDetailComponent;
  let fixture: ComponentFixture<HavencraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HavencraftDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavencraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
