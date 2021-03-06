// Angular
import { UntypedFormGroup } from '@angular/forms';

// Self
import { IFormValue } from './iform-value';

export interface IManagementStepper<T> extends IFormValue<T> {
  isValid(): boolean;
  stepperFormGroup?: UntypedFormGroup;
}
