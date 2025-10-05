import { Module } from '@nestjs/common';
import { ProfileDetailsService } from './profile-details.service';
import { ProfileDetailsController } from './profile-details.controller';
import { ProfileDetails, ProfileDetailsSchema } from './profile-details.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ProfileDetailsController],
  providers: [ProfileDetailsService],
  imports: [
    MongooseModule.forFeature([
      { name: ProfileDetails.name, schema: ProfileDetailsSchema },
    ]),
  ],
})
export class ProfileDetailsModule {}
