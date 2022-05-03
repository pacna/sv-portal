import { Component, Input } from '@angular/core';
import { EvoSpecs } from '../../../types/customs/evo-specs';
import {
  CardStepper,
  EvoStepper,
  IFormValue,
  IManagementStepper,
} from '../types';

@Component({
  selector: 'card-stepper',
  template: '',
})
export class MockCardStepperComponent
  implements IManagementStepper<CardStepper>
{
  public isValid(): boolean {
    return false;
  }

  public getValue(): CardStepper {
    return {} as CardStepper;
  }
}

@Component({
  selector: 'evo-stepper',
  template: '',
})
export class MockEvoStepperComponent implements IManagementStepper<EvoStepper> {
  public isValid(): boolean {
    return false;
  }

  public getValue(): EvoStepper {
    return {} as EvoStepper;
  }
}

@Component({
  selector: 'audio-stepper',
  template: '',
})
export class MockAudioStepperComponent implements IFormValue<string[]> {
  public getValue(): string[] {
    return ['https://www.w3schools.com/tags/horse.mp3'];
  }
}

@Component({
  selector: 'evo-card-editor',
  template: '',
})
export class MockEvoCardEditorComponent implements IFormValue<string> {
  @Input() editorHeader: string;
  public getValue(): string {
    return 'foo';
  }
}

@Component({
  selector: 'evo-content-stepper',
  template: '',
})
export class MockEvoContentStepperComponent
  implements IManagementStepper<EvoSpecs>
{
  @Input() evoHeader: string;

  public isValid(): boolean {
    return false;
  }

  public getValue(): EvoSpecs {
    return {} as EvoSpecs;
  }
}
