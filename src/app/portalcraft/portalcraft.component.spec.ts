import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalcraftComponent } from './portalcraft.component';

describe('PortalcraftComponent', () => {
  let component: PortalcraftComponent;
  let fixture: ComponentFixture<PortalcraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortalcraftComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalcraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
