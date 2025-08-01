import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginForm } from './login.model';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    TranslateModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true,
})
export class Login {
  loginForm = signal<FormGroup<LoginForm> | undefined>(undefined);
  constructor(private fb: FormBuilder, private router: Router) {}

  buildForm() {
    const fb = this.fb.nonNullable;
    const form = fb.group({
      email: fb.control<string | null | undefined>(undefined, [
        Validators.required,
        Validators.email,
      ]),
      password: fb.control<string | null | undefined>(undefined, [
        Validators.required,
      ]),
    });

    this.loginForm.set(form);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    this.buildForm();
  }
}
