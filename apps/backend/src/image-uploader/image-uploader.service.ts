import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';
import * as FormData from 'form-data';

@Injectable()
export class ImageUploaderService {
  constructor(
    private configService: ConfigService,
    private http: HttpService,
  ) {}
  private readonly IMGBB_API_URL = 'https://api.imgbb.com/1/upload';

  uploadImage(file: Express.Multer.File) {
    const imgbbApiKey = this.configService.get('IMGBB_API_KEY');

    const formData = new FormData();
    formData.append('image', file.buffer, {
      filename: file.originalname,
      contentType: file.mimetype,
    });

    return this.http
      .post(`${this.IMGBB_API_URL}?key=${imgbbApiKey}`, formData)
      .pipe(map((res) => res.data));
  }
}
