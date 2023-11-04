import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/data-source';
import { ScheduleModule } from '@nestjs/schedule';
import { TestModule } from './modules/test/test.module';
import { UsersModule } from './tables/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    TestModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
