// Angular
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// Third party
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Self
import { IFormValue } from '../../types/iform-value';

@Component({
  selector: 'evo-card-editor',
  templateUrl: './evo-card-editor.component.html',
  styleUrls: ['./evo-card-editor.component.scss'],
})
export class EvoCardEditorComponent implements IFormValue<string> {
  @Input() set editorText(editorText: string) {
    this.ckeditorTextCtrl.setValue(editorText ?? '');
  }
  @Input() editorHeader: string;
  editor = ClassicEditor;
  ckeditorConfig = {
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'blockquote',
      '|',
      'undo',
      'redo',
      '|',
      'numberedList',
      'bulletedList',
      'outdent',
      'indent',
    ],
  };

  private ckeditorTextCtrl = new FormControl<string>('');
  ckeditorFormGroup = new FormGroup({
    ckeditorText: this.ckeditorTextCtrl,
  });

  public getValue(): string {
    return this.ckeditorTextCtrl.value;
  }
}
