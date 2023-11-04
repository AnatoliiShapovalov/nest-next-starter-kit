import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOneByEmail(email: string) {
    if (!email) {
      return null;
    }

    return await this.userRepository.findOne({ where: { email } });
  }

  async findOneById(id: number) {
    if (!id) {
      return null;
    }

    return await this.userRepository.findOne({ where: { id } });
  }
}
