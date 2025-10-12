import { Component, signal, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { EmptyLinks } from '../empty-links/empty-links';
import { SelectModule } from 'primeng/select';
import { LinkOption, LinkForm, Link } from './links-builder.model';
import { linkOptions } from './links-builder.fn';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-links-builder',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ButtonModule,
    EmptyLinks,
    SelectModule,
    InputTextModule,
  ],
  templateUrl: './links-builder.html',
  styleUrl: './links-builder.scss',
  standalone: true,
})
export class LinksBuilder implements OnInit {
  isEmpty = signal<boolean>(true);
  linkOptions = signal<LinkOption[]>(linkOptions);
  linksForm = signal<
    FormGroup<{ links: FormArray<FormGroup<LinkForm>> }> | undefined
  >(undefined);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.linksForm.set(
      this.fb.group({
        links: this.fb.array<FormGroup<LinkForm>>([]),
      })
    );
  }

  get linksArray(): FormArray {
    return this.linksForm()?.get('links') as FormArray;
  }

  addNewLink() {
    const newLinkForm = this.fb.group<LinkForm>({
      platform: this.fb.control('', [Validators.required]),
      url: this.fb.control('', [
        Validators.required,
        // Validators.pattern(/^https?:\/\/.+/),
      ]),
    });

    this.linksArray.push(newLinkForm);
    this.isEmpty.set(false);
  }

  removeLink(index: number) {
    this.linksArray.removeAt(index);
    if (this.linksArray.length === 0) {
      this.isEmpty.set(true);
    }
  }

  getLinkOptionById(id: string): LinkOption | undefined {
    return this.linkOptions().find((option) => option.id === id);
  }

  saveLinks() {
    if (this.linksForm()?.valid) {
      const links: Link[] = this.linksArray.value.map((linkForm: Link) => ({
        platform: linkForm.platform || '',
        url: linkForm.url || '',
      }));
      console.log('Saving links:', links);
    } else {
      console.log('Form is invalid');
    }
  }
}
