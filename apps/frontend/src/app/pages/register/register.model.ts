import { FormControl } from '@angular/forms';

export interface RegisterForm {
  email: FormControl<string | null | undefined>;
  password: FormControl<string | null | undefined>;
  confirmPassword: FormControl<string | null | undefined>;
}
