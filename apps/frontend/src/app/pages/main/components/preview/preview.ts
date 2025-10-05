import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Link {
  id: string;
  platform: string;
  url: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-preview',
  imports: [CommonModule],
  templateUrl: './preview.html',
  styleUrl: './preview.scss',
  standalone: true,
})
export class Preview {
  profilePicture = signal<string | null>(null);
  firstName = signal<string>('');
  lastName = signal<string>('');
  email = signal<string>('');

  links = signal<Link[]>([]);

  get fullName(): string {
    const first = this.firstName();
    const last = this.lastName();
    if (!first && !last) return '';
    return `${first} ${last}`.trim();
  }
}
