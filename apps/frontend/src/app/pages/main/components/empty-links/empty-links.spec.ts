import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyLinks } from './empty-links';

describe('EmptyLinks', () => {
  let component: EmptyLinks;
  let fixture: ComponentFixture<EmptyLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
