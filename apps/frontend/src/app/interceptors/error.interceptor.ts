import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Alert } from '@app/services/alert';
import { catchError } from 'rxjs';

export function errorInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const alertService = inject(Alert);
  return next(request).pipe(
    catchError((error) => {
      if (error.error.message) {
        alertService.error(error.error.message);
      }
      return throwError(() => error);
    })
  );
}
