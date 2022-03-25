import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowcraftDetailComponent } from './shadowcraft-detail.component';

describe('ShadowcraftDetailComponent', () => {
  let component: ShadowcraftDetailComponent;
  let fixture: ComponentFixture<ShadowcraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowcraftDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
