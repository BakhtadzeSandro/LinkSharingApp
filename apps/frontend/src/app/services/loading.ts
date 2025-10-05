import { Injectable } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private loadingBar: LoadingBarService) {}

  start() {
    this.loadingBar.useRef().start();
  }

  stop() {
    this.loadingBar.useRef().complete();
  }
}
