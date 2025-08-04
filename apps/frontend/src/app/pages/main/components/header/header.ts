import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { HeaderItem } from './header.model';
import { Auth } from '@app/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  selectedHeaderItem = signal<HeaderItem>(HeaderItem.LINKS);

  HeaderItem = HeaderItem;
  constructor(private authService: Auth, private router: Router) {}

  changeTab(tab: HeaderItem) {
    this.selectedHeaderItem.set(tab);
    switch (tab) {
      case HeaderItem.LINKS:
        this.router.navigate(['/main/links']);
        break;
      case HeaderItem.PROFILE_DETAILS:
        this.router.navigate(['/main/profile-details']);
        break;
      default:
        break;
    }
  }

  logout() {
    this.authService.logout();
  }
}
