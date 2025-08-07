import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-profile-details',
  imports: [TranslateModule, FormsModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './profile-details.html',
  styleUrl: './profile-details.scss',
  standalone: true,
})
export class ProfileDetails {
  constructor() {}
}
