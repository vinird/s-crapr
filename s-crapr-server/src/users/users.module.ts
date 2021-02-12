import { Module } from '@nestjs/common';

// Modules
import { TypeOrmModule } from '@nestjs/typeorm';

// Services
import { UsersService } from './users.service';

// Entities
import { User } from './users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User
    ]),
  ],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
