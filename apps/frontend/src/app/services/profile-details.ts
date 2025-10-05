import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileDetailsDto } from '@link-sharing-app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsService {
  constructor(private http: HttpClient) {}

  updateProfileDetails(profileDetailsDto: ProfileDetailsDto) {
    return this.http.post(
      `${environment.apiUrl}/profile-details`,
      profileDetailsDto
    );
  }
}
