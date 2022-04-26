import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'evo-card-editor',
  templateUrl: './evo-card-editor.component.html',
  styleUrls: ['./evo-card-editor.component.scss'],
})
export class EvoCardEditorComponent implements OnInit {
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

  private ckeditorTextCtrl: FormControl = new FormControl('');
  ckeditorFormGroup: FormGroup = new FormGroup({
    ckeditorText: this.ckeditorTextCtrl,
  });
  constructor() {}

  ngOnInit(): void {}
}
