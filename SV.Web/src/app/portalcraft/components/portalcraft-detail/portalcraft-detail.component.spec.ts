import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalcraftDetailComponent } from './portalcraft-detail.component';

describe('PortalcraftDetailComponent', () => {
  let component: PortalcraftDetailComponent;
  let fixture: ComponentFixture<PortalcraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalcraftDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
