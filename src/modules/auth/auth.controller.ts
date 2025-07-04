import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async google() {}

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@Req() req: any) {
    return req.user;
  }

  @Get('/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebook() {}

  @Get('/facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookCallback(@Req() req: any) {
    return req.user;
  }
}