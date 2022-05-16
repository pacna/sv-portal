// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third party
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// Self
import { EvoCardEditorComponent } from './evo-card-editor.component';

describe('EvoCardEditorComponent', () => {
  let component: EvoCardEditorComponent;
  let fixture: ComponentFixture<EvoCardEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CKEditorModule, FormsModule, ReactiveFormsModule],
      declarations: [EvoCardEditorComponent],
    }).compileComponents();
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
