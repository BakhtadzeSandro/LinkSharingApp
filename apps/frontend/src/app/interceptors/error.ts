import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Alert } from '@app/services/alert';
import { catchError } from 'rxjs';
import { Auth } from '@app/services/auth';
import { Router } from '@angular/router';

export function errorInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const alertService = inject(Alert);
  const authService = inject(Auth);
  const router = inject(Router);

  return next(request).pipe(
    catchError((error) => {
      if (error.error.message) {
        alertService.error(error.error.message);
      }
      if (error.status === 401) {
        localStorage.removeItem('token');
        authService.currentUser.set(null);
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
}
