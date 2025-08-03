import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterDto } from '@link-sharing-app/shared';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) {}

  register(registerDto: RegisterDto) {
    return this.http.post(`${environment.apiUrl}/auth/register`, registerDto);
  }
}
