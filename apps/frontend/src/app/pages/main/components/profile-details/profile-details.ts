import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ImageUploadService } from '@app/services/image-upload';

@Component({
  selector: 'app-profile-details',
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './profile-details.html',
  styleUrl: './profile-details.scss',
  standalone: true,
})
export class ProfileDetails {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  profileImage = signal<string | null>(null);
  uploadError = signal<string | null>(null);
  isUploading = signal<boolean>(false);

  private readonly MAX_FILE_SIZE = 32 * 1024 * 1024;

  private readonly ALLOWED_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/bmp',
    'image/webp',
  ];

  constructor(
    private imageUploadService: ImageUploadService,
    private translate: TranslateService
  ) {}

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    this.uploadError.set(null);

    if (!this.ALLOWED_TYPES.includes(file.type)) {
      this.uploadError.set(
        this.translate.instant('ProfileDetails.InvalidFileType')
      );
      return;
    }

    if (file.size > this.MAX_FILE_SIZE) {
      this.uploadError.set(
        this.translate.instant('ProfileDetails.FileSizeExceeded')
      );
      return;
    }

    this.uploadToImgBB(file);
  }

  private uploadToImgBB(file: File): void {
    this.isUploading.set(true);
    this.uploadError.set(null);

    this.imageUploadService.uploadImage(file).subscribe({
      next: (imageUrl: string) => {
        this.profileImage.set(imageUrl);
        this.isUploading.set(false);
      },
      error: (error) => {
        console.error('Image upload failed:', error);
        this.uploadError.set(
          this.translate.instant('ProfileDetails.UploadFailed')
        );
        this.isUploading.set(false);
      },
    });
  }

  removeImage(): void {
    this.profileImage.set(null);
    this.uploadError.set(null);
    this.isUploading.set(false);
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  saveProfile(): void {
    // TODO: Implement profile save functionality
    console.log('Save profile clicked');
    console.log('Profile Image:', this.profileImage());
  }
}
