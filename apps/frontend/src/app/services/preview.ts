import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreviewService {
  preview = signal<any | null>(null);

  constructor() {}
}
