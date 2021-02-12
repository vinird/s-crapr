import { UsersService } from '../users/users.service';
import { User } from 'src/users/users.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async findAll() {
    return this.usersService.findAll();
  }

  async register(user: User) {
    return this.usersService.register(user);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    /*
    * TODO: connect ORM with authentication
    */
    // const dbUser = this.usersService.findOneByEmail(user.email);
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}