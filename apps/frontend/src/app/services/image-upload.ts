import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImgBBResponse } from '@link-sharing-app/shared';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  uploadImage(imageFile: File | string): Observable<ImgBBResponse> {
    const formData = new FormData();
    if (typeof imageFile === 'string') {
      const base64Data = imageFile.split(',')[1] || imageFile;
      formData.append('image', base64Data);
    } else {
      formData.append('image', imageFile);
    }

    return this.http.post<ImgBBResponse>(
      `${environment.apiUrl}/image-uploader`,
      formData
    );
  }
}
