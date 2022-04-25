import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoCardEditorComponent } from './evo-card-editor.component';

describe('EvoCardEditorComponent', () => {
  let component: EvoCardEditorComponent;
  let fixture: ComponentFixture<EvoCardEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvoCardEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoCardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
