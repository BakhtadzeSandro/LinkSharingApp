import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterForm } from './register.model';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Auth } from '@app/services/auth';
import { Alert } from '@app/services/alert';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm = signal<FormGroup<RegisterForm> | undefined>(undefined);
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: Auth,
    private alertService: Alert
  ) {}

  buildForm() {
    const fb = this.fb.nonNullable;
    const form = fb.group<RegisterForm>({
      email: new FormControl<string | null | undefined>(undefined, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string | null | undefined>(undefined, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl<string | null | undefined>(undefined, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    this.registerForm.set(form);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  register() {
    const formValue = this.registerForm()?.value;
    if (formValue?.password !== formValue?.confirmPassword) {
      return;
    }
    if (formValue?.email && formValue?.password) {
      const payload = {
        email: formValue.email,
        password: formValue.password,
      };
      this.authService.register(payload).subscribe((res: any) => {
        this.alertService.success('AlertMessages.UserCreated');
        this.router.navigate(['/login']);
      });
    }
  }

  ngOnInit() {
    this.buildForm();
  }
}
