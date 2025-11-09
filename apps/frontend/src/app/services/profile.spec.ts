import { TestBed } from '@angular/core/testing';

import { ProfileDetails } from './profile-details';

describe('ProfileDetails', () => {
  let service: ProfileDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
