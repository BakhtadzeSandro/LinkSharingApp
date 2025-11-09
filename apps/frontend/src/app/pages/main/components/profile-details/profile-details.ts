import {
  Component,
  signal,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ImageUploadService } from '@app/services/image-upload';
import { ProfileDetailsForm } from './profile-details.model';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { PreviewService } from '@app/services/preview';
import { ProfileService } from '@app/services/profile';
import { ImgBBResponse, ProfileDetailsDto } from '@link-sharing-app/shared';

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
export class ProfileDetails implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  profileImage = signal<string | null>(null);
  uploadError = signal<string | null>(null);
  isUploading = signal<boolean>(false);

  profileDetailsForm = signal<FormGroup<ProfileDetailsForm> | undefined>(
    undefined
  );

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
    private translate: TranslateService,
    private fb: FormBuilder,
    private previewService: PreviewService,
    private profileService: ProfileService
  ) {}

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
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

  private uploadToImgBB(file: File) {
    this.isUploading.set(true);
    this.uploadError.set(null);
    this.imageUploadService.uploadImage(file).subscribe({
      next: (imageUrl: ImgBBResponse) => {
        this.profileImage.set(imageUrl.data.url);
        const currentPreviewValue = this.previewService.preview();
        this.previewService.preview.set({
          ...currentPreviewValue,
          profileImage: imageUrl.data.url,
        });

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

  removeImage() {
    this.profileImage.set(null);
    const currentPreviewValue = this.previewService.preview();
    if (currentPreviewValue) {
      this.previewService.preview.set({
        ...currentPreviewValue,
        profileImage: null,
      });
    }
    this.uploadError.set(null);
    this.isUploading.set(false);
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  saveProfile() {
    if (this.profileDetailsForm()?.invalid) {
      return;
    }
    const profileDetailsPayload: ProfileDetailsDto = {
      firstName: this.profileDetailsForm()?.value.firstName!,
      lastName: this.profileDetailsForm()?.value.lastName!,
      email: this.profileDetailsForm()?.value.email!,
      profileImage: this.profileImage(),
    };
    this.profileService
      .updateProfileDetails(profileDetailsPayload)
      .subscribe((val) => console.log(val));
  }

  buildForm() {
    const fb = this.fb.nonNullable;
    const profileDetailsForm = fb.group<ProfileDetailsForm>({
      firstName: fb.control<string | undefined>(undefined, [
        Validators.required,
      ]),
      lastName: fb.control<string | undefined>(undefined, [
        Validators.required,
      ]),
      email: fb.control<string | undefined>(undefined, [
        Validators.required,
        Validators.email,
      ]),
    });
    this.profileDetailsForm.set(profileDetailsForm);
  }

  listenToFormChanges() {
    this.profileDetailsForm()
      ?.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        const previewValue = {
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          profileImage: this.profileImage(),
        };
        this.previewService.preview.set(previewValue);
      });
  }

  ngOnInit(): void {
    this.buildForm();
    this.listenToFormChanges();
  }
}
