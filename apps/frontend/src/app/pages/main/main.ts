import { Component, signal } from '@angular/core';
import { Header, Preview } from './components';
import { RouterOutlet } from '@angular/router';
import { Auth } from '@app/services/auth';
import { User } from '@link-sharing-app/shared';

@Component({
  selector: 'app-main',
  imports: [Header, Preview, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  standalone: true,
})
export class Main {
  currentUser = signal<User | null>(null);
  constructor(private authService: Auth) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((res) => {
      this.currentUser.set(res);
      this.authService.currentUser.set(res);
    });
  }
}
