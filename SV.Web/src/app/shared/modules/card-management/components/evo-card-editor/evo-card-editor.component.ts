// Angular
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

// Self
import { IFormValue } from '../../types/iform-value';

declare const require: any;

@Component({
  selector: 'evo-card-editor',
  templateUrl: './evo-card-editor.component.html',
  styleUrls: ['./evo-card-editor.component.scss'],
})
export class EvoCardEditorComponent implements OnInit, IFormValue<string> {
  @Input() set editorText(editorText: string) {
    this.ckeditorTextCtrl.setValue(editorText ?? '');
  }
  @Input() editorHeader: string;
  editor;
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

  private ckeditorTextCtrl: UntypedFormControl = new UntypedFormControl('');
  ckeditorFormGroup: UntypedFormGroup = new UntypedFormGroup({
    ckeditorText: this.ckeditorTextCtrl,
  });
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // hack to load ckeditor for SSR
    this.loadCKEditorHack();
  }

  ngOnInit(): void {}

  private loadCKEditorHack(): void {
    if (isPlatformBrowser(this.platformId)) {
      const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
      this.editor = ClassicEditor;
    }
  }

  public getValue(): string {
    return this.ckeditorTextCtrl.value;
  }
}
