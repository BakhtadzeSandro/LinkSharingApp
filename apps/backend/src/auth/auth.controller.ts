import { AuthDto } from '@link-sharing-app/shared';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('register')
  register(@Body() body: AuthDto) {
    return this.authService.createUser(body);
  }

  @Public()
  @Post('login')
  login(@Body() body: AuthDto) {
    return this.authService.login(body);
  }
}
