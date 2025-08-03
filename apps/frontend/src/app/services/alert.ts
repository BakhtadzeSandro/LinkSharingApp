import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class Alert {
  constructor(private translateService: TranslateService) {}

  success(message: string) {
    Swal.fire({
      title: this.translateService.instant('AlertMessages.Success'),
      text: this.translateService.instant(message),
      icon: 'success',
    });
  }

  error(message: string) {
    Swal.fire({
      title: this.translateService.instant('AlertMessages.Error'),
      text: this.translateService.instant(message),
      icon: 'error',
    });
  }
}
