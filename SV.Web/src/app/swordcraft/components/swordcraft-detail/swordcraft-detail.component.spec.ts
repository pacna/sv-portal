import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordcraftDetailComponent } from './swordcraft-detail.component';

describe('SwordcraftDetailComponent', () => {
  let component: SwordcraftDetailComponent;
  let fixture: ComponentFixture<SwordcraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwordcraftDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwordcraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
