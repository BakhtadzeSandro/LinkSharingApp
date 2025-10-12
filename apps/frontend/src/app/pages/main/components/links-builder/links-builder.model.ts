import { FormControl, FormGroup } from '@angular/forms';

export interface LinkForm {
  platform: FormControl<string | null>;
  url: FormControl<string | null>;
}

export interface Link {
  platform: string;
  url: string;
}

export interface LinkOption {
  id: string;
  name: string;
  icon: string;
  backgroundColor: string;
  textColor: string;
}
