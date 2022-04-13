import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralDetailComponent } from './neutral-detail.component';

describe('NeutralDetailComponent', () => {
  let component: NeutralDetailComponent;
  let fixture: ComponentFixture<NeutralDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeutralDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeutralDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
