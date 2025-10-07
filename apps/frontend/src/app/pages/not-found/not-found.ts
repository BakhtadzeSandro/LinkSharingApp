import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '@app/services/auth';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslateModule, ButtonModule],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.scss'],
})
export class NotFound {
  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  constructor(public router: Router, private authService: Auth) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
