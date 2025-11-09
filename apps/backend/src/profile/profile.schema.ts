import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  collection: 'profile',
})
export class ProfileDetails {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  profileImage: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: string;
}

@Schema({
  collection: 'links',
})
export class Links {
  @Prop({ required: true })
  links: {
    platform: {
      backgroundColor: string;
      icon: string;
      name: string;
      id: string;
      textColor: string;
    };
    url: string;
  }[];

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  userId: string;
}

export const ProfileDetailsSchema =
  SchemaFactory.createForClass(ProfileDetails);

export const LinksSchema = SchemaFactory.createForClass(Links);
