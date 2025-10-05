import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfileDetails } from './profile-details.schema';
import { ProfileDetailsDto } from '@link-sharing-app/shared';

@Injectable()
export class ProfileDetailsService {
  constructor(
    @InjectModel(ProfileDetails.name)
    private profileDetailsModel: Model<ProfileDetails>,
  ) {}

  async updateProfileDetails(
    profileDetailsDto: ProfileDetailsDto,
    userId: string,
  ) {
    console.log(profileDetailsDto, 'profileDetailsDto');
    console.log(userId, 'userId');
  }
}
