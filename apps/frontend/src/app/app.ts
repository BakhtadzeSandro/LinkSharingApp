import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, LoadingBarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('frontend');

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en']);
    this.translate.use('en');
  }
}
