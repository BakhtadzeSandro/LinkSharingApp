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
import { Auth } from '@app/services/auth';

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
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: Auth
  ) {}

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

  login() {
    const formValue = this.loginForm()?.value;
    if (formValue?.email && formValue?.password) {
      const payload = {
        email: formValue.email,
        password: formValue.password,
      };
      this.authService.login(payload).subscribe((res: { token: string }) => {
        if (res) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/main']);
        }
      });
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    this.buildForm();
  }
}
