import { FormControl } from '@angular/forms';

export interface ProfileDetailsForm {
  firstName: FormControl<string | undefined>;
  lastName: FormControl<string | undefined>;
  email: FormControl<string | undefined>;
}
