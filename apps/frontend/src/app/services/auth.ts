import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthDto } from '@link-sharing-app/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) {}

  register(registerDto: AuthDto) {
    return this.http.post(`${environment.apiUrl}/auth/register`, registerDto);
  }

  login(loginDto: AuthDto): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${environment.apiUrl}/auth/login`,
      loginDto
    );
  }
}
