import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  collection: 'profile-details',
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

export const ProfileDetailsSchema =
  SchemaFactory.createForClass(ProfileDetails);
