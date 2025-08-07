import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { EmptyLinks } from '../empty-links/empty-links';

@Component({
  selector: 'app-links-builder',
  imports: [TranslateModule, ButtonModule, EmptyLinks],
  templateUrl: './links-builder.html',
  styleUrl: './links-builder.scss',
  standalone: true,
})
export class LinksBuilder {
  get isEmpty() {
    return true;
  }

  constructor() {}
}
