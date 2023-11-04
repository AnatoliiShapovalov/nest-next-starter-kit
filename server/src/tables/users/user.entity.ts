import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ length: 60 })
  password: string;

  async setPassword(rawPassword: string) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(rawPassword, saltRounds);
    this.password = hashedPassword;
  }

  async checkPassword(rawPassword: string) {
    return await bcrypt.compare(rawPassword, this.password);
  }
}
