import { AuthDto } from '@link-sharing-app/shared';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: AuthDto) {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: AuthDto) {
    return this.authService.login(body);
  }
}
