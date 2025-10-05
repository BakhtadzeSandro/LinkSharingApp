import { Body, Controller, Post, Req } from '@nestjs/common';
import { ProfileDetailsService } from './profile-details.service';
import { ProfileDetailsDto } from '@link-sharing-app/shared';

@Controller('profile-details')
export class ProfileDetailsController {
  constructor(private profileDetailsService: ProfileDetailsService) {}

  @Post()
  updateProfileDetails(@Body() body: ProfileDetailsDto, @Req() req: Request) {
    return this.profileDetailsService.updateProfileDetails(
      body,
      req['user'].userId,
    );
  }
}
