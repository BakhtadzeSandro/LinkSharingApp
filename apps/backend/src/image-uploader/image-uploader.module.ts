import { Module } from '@nestjs/common';
import { ImageUploaderService } from './image-uploader.service';
import { ImageUploaderController } from './image-uploader.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [ImageUploaderService],
  controllers: [ImageUploaderController],
  imports: [HttpModule],
})
export class ImageUploaderModule {}
