import { AuthDto } from '@link-sharing-app/shared';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async register(registerDto: AuthDto) {
    const user = await this.userService.createUser(registerDto);
    return user;
  }

  async login(loginDto: AuthDto) {
    const user = await this.userService.login(loginDto);
    return user;
  }
}
