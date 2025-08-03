import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as UniqueValidator from 'mongoose-unique-validator';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User).plugin(
  UniqueValidator,
  {
    message: 'ErrorMessages.UniqueValidationError',
  },
);
