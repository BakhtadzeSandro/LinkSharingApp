import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthDto } from '@link-sharing-app/shared';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '@link-sharing-app/shared';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  currentUser = signal<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  register(registerDto: AuthDto) {
    return this.http.post(`${environment.apiUrl}/auth/register`, registerDto);
  }

  login(loginDto: AuthDto): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${environment.apiUrl}/auth/login`,
      loginDto
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/me`);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
