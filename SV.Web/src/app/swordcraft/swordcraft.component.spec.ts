import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordcraftComponent } from './swordcraft.component';

describe('SwordcraftComponent', () => {
  let component: SwordcraftComponent;
  let fixture: ComponentFixture<SwordcraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwordcraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwordcraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
