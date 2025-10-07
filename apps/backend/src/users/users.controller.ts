import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('me')
  getCurrentUser(@Req() req: Request) {
    return this.usersService.getCurrentUser(req['user'].userId);
  }
}
