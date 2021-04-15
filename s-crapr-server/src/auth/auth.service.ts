import { UsersService } from '../users/users.service';
import { User } from 'src/users/users.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async findAll() {
    return this.usersService.findAll();
  }

  async register(user: User) {
    return this.usersService.register(user);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user) {
      // Load hash from your password DB.
      const match = await compare(pass, user.password)
      if (match) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(body: any, user: User) {
    return {
      ...user, token: this.jwtService.sign(body),
    };
  }
}