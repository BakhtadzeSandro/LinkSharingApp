import { FormControl } from '@angular/forms';

export interface ProfileDetailsForm {
  firstName: FormControl<string | null | undefined>;
  lastName: FormControl<string | null | undefined>;
  email: FormControl<string | null | undefined>;
  profileImage: FormControl<string | null | undefined>;
}
