import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestcraftDetailComponent } from './forestcraft-detail.component';

describe('ForestcraftDetailComponent', () => {
  let component: ForestcraftDetailComponent;
  let fixture: ComponentFixture<ForestcraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestcraftDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
