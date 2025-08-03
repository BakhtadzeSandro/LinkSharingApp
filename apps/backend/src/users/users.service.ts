import { AuthDto } from '@link-sharing-app/shared';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(registerDto: AuthDto) {
    const userEmail = registerDto.email;
    const userPassword = await bcrypt.hash(registerDto.password, 10);

    const user = new this.userModel({
      email: userEmail,
      password: userPassword,
    });
    try {
      return await user.save();
    } catch (err) {
      if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map((e: any) => e.message);
        throw new BadRequestException(messages.join(' '));
      }

      throw err;
    }
  }

  async login(loginDto: AuthDto) {
    const user = await this.userModel.findOne({ email: loginDto.email });
    if (!user) {
      throw new BadRequestException('ErrorMessages.IncorrectEmailOrPassword');
    }
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('ErrorMessages.IncorrectEmailOrPassword');
    }
    return user;
  }
}
