import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';
import { LoadingService } from '@app/services/loading.service';

export function loadingInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const loadingService = inject(LoadingService);
  loadingService.start();

  return next(request).pipe(
    // delay(2000),
    finalize(() => loadingService.stop())
  );
}
