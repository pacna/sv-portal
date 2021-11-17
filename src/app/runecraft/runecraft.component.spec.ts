import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunecraftComponent } from './runecraft.component';

describe('RunecraftComponent', () => {
  let component: RunecraftComponent;
  let fixture: ComponentFixture<RunecraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RunecraftComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunecraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
