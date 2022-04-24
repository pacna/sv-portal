import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'card-editor',
  templateUrl: './card-editor.component.html',
  styleUrls: ['./card-editor.component.scss'],
})
export class CardEditorComponent implements OnInit {
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

  @Input() editorHeader: string;

  ckeditorTextCtrl: FormControl = new FormControl('');
  ckeditorFormGroup: FormGroup = new FormGroup({
    ckeditorText: this.ckeditorTextCtrl,
  });
  constructor() {}

  ngOnInit(): void {}
}
