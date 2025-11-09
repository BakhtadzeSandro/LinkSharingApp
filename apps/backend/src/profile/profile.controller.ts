import { Body, Controller, Post, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { LinksDto, ProfileDetailsDto } from '@link-sharing-app/shared';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post('details')
  updateProfileDetails(@Body() body: ProfileDetailsDto, @Req() req: Request) {
    return this.profileService.updateProfileDetails(body, req['user'].userId);
  }

  @Post('links')
  updateLinks(@Body() body: LinksDto[], @Req() req: Request) {
    return this.profileService.updateLinks(body, req['user'].userId);
  }
}
