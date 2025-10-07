import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '@app/services/auth';

export const anonymGuard = () => {
  const authService = inject(Auth);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/main']);
  return false;
};
