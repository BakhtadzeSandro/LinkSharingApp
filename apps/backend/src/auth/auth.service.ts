import { RegisterDto } from '@link-sharing-app/shared';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const user = await this.userService.createUser(registerDto);
    return user;
  }
}
