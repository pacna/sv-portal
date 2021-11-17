import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestcraftComponent } from './forestcraft.component';

describe('ForestcraftComponent', () => {
  let component: ForestcraftComponent;
  let fixture: ComponentFixture<ForestcraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForestcraftComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestcraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
