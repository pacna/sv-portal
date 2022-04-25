import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStepperComponent } from './components/card-stepper/card-stepper.component';
import { AudioStepperComponent } from './components/audio-stepper/audio-stepper.component';
import { EvoStepperComponent } from './components/evo-stepper/evo-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EvoContentStepperComponent } from './components/evo-content-stepper/evo-content-stepper.component';
import { CardManagementComponent } from './card-management.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EvoCardEditorComponent } from './components/evo-card-editor/evo-card-editor.component';

@NgModule({
  declarations: [
    CardManagementComponent,
    CardStepperComponent,
    AudioStepperComponent,
    EvoStepperComponent,
    EvoContentStepperComponent,
    EvoCardEditorComponent,
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatDividerModule,
    CKEditorModule,
  ],
})
export class CardManagementModule {}
