import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseOverviewComponent } from './base-overview.component';

describe('BaseOverviewComponent', () => {
  let component: BaseOverviewComponent;
  let fixture: ComponentFixture<BaseOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
