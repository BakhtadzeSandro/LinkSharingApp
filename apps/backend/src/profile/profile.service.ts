import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Links, ProfileDetails } from './profile.schema';
import { LinksDto, ProfileDetailsDto } from '@link-sharing-app/shared';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(ProfileDetails.name)
    private profileDetailsModel: Model<ProfileDetails>,
    @InjectModel(Links.name)
    private linksModel: Model<Links>,
  ) {}

  async updateProfileDetails(
    profileDetailsDto: ProfileDetailsDto,
    userId: string,
  ) {
    const profileDetails = await this.profileDetailsModel.findOne({ userId });
    if (profileDetails) {
      await profileDetails.updateOne(profileDetailsDto);
    } else {
      await this.profileDetailsModel.create({ ...profileDetailsDto, userId });
    }
  }

  async updateLinks(linksDto: LinksDto[], userId: string) {
    console.log(linksDto, userId);
    const links = await this.linksModel.findOne({ userId });
    if (links) {
      await links.updateOne({ links: linksDto });
    } else {
      await this.linksModel.create({ links: linksDto, userId });
    }
  }
}
