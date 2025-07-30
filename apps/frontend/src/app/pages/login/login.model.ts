import { FormControl } from '@angular/forms';

export interface LoginForm {
  email: FormControl<string | null | undefined>;
  password: FormControl<string | null | undefined>;
}
