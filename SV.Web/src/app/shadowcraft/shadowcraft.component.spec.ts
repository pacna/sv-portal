import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowcraftComponent } from './shadowcraft.component';

describe('ShadowcraftComponent', () => {
  let component: ShadowcraftComponent;
  let fixture: ComponentFixture<ShadowcraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowcraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowcraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
