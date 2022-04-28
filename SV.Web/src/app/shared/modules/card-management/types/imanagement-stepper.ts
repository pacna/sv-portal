import { FormGroup } from '@angular/forms';
import { IFormValue } from './iform-value';

export interface IManagementStepper<T> extends IFormValue<T> {
  isValid(): boolean;
  stepperFormGroup?: FormGroup;
}
