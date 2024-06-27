import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { SeedService } from './database/faker.service';
const dotenv = require('dotenv');
dotenv.config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USER_NAME,
      password: process.env.PASS,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    TypeOrmModule.forFeature([User])
  ],
  providers: [SeedService],
})
export class AppModule {}
