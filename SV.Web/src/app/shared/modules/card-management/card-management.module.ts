// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';

// Third party
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// Self
import { CardStepperComponent } from './components/card-stepper/card-stepper.component';
import { AudioStepperComponent } from './components/audio-stepper/audio-stepper.component';
import { EvoStepperComponent } from './components/evo-stepper/evo-stepper.component';
import { EvoContentStepperComponent } from './components/evo-content-stepper/evo-content-stepper.component';
import { CardManagementComponent } from './card-management.component';
import { EvoCardEditorComponent } from './components/evo-card-editor/evo-card-editor.component';
import { CardManagementEventService, CardEditEventService } from './services';

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
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatDividerModule,
    MatTooltipModule,
    MatSnackBarModule,

    // Third party
    CKEditorModule,
  ],
  providers: [CardManagementEventService, CardEditEventService],
})
export class CardManagementModule {}
