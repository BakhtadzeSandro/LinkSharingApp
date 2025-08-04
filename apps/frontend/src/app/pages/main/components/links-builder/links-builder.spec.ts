import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksBuilder } from './links-builder';

describe('LinksBuilder', () => {
  let component: LinksBuilder;
  let fixture: ComponentFixture<LinksBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
