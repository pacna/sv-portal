import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeactivateComponent } from './card-deactivate.component';

describe('CardDeactivateComponent', () => {
  let component: CardDeactivateComponent;
  let fixture: ComponentFixture<CardDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDeactivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
