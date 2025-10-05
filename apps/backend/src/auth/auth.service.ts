import { AuthDto } from '@link-sharing-app/shared';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/users.model';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async createUser(registerDto: AuthDto) {
    const userEmail = registerDto.email;
    const userPassword = await bcrypt.hash(registerDto.password, 10);

    const user = new this.userModel({
      email: userEmail,
      password: userPassword,
    });
    try {
      const savedUser = await user.save();
      return !!savedUser;
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
    const payload = { userId: user._id, email: user.email };

    const token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
    });
    return { token };
  }
}
