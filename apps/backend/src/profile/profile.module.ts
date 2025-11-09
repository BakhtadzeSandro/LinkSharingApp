import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import {
  Links,
  LinksSchema,
  ProfileDetails,
  ProfileDetailsSchema,
} from './profile.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [
    MongooseModule.forFeature([
      { name: ProfileDetails.name, schema: ProfileDetailsSchema },
      { name: Links.name, schema: LinksSchema },
    ]),
  ],
})
export class ProfileModule {}
