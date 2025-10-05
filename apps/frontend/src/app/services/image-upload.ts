import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ImgBBResponse } from '@link-sharing-app/shared';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  private readonly IMGBB_API_URL = 'https://api.imgbb.com/1/upload';

  constructor(private http: HttpClient) {}

  uploadImage(imageFile: File | string): Observable<string> {
    const formData = new FormData();

    if (typeof imageFile === 'string') {
      const base64Data = imageFile.split(',')[1] || imageFile;
      formData.append('image', base64Data);
    } else {
      formData.append('image', imageFile);
    }

    const params = new HttpParams().set('key', environment.imgbbApiKey);

    return this.http
      .post<ImgBBResponse>(this.IMGBB_API_URL, formData, { params })
      .pipe(
        map((response) => {
          if (response.success) {
            return response.data.display_url;
          }
          throw new Error('Image upload failed');
        })
      );
  }
}
