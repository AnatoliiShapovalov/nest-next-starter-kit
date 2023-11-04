import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/tables/users/user.entity';
import { UsersService } from 'src/tables/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user || !(await user.checkPassword(password))) {
      throw new Error('Invalid email or password');
    }

    const payload = { sub: user.id };
    const token = this.jwtService.sign(payload);

    return { token };
  }

  async validateOAuthLogin(user: User): Promise<{ token: string }> {
    const payload = { sub: user.id };
    const token = this.jwtService.sign(payload);

    return { token };
  }
}
