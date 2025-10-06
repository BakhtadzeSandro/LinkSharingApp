import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploaderService } from './image-uploader.service';

@Controller('image-uploader')
export class ImageUploaderController {
  constructor(private imageUploaderService: ImageUploaderService) {}
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.imageUploaderService.uploadImage(file);
  }
}
