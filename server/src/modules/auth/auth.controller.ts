import { Controller, Post, Body, UseGuards, Request, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/tables/users/users.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const token = await this.authService.login(email, password);
    return token;
  }

  @UseGuards(JwtAuthGuard)
  @Post('getCurrentUser')
  async getMe(@Request() req) {
    const userId = req.user.id;

    if (!userId) {
      throw new HttpException('Invalid argument', 500);
    }

    const user = await this.usersService.findOneById(req.user.id);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return user;
  }
}
