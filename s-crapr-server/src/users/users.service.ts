import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { User } from './users.entity';
import { hash, compare } from 'bcrypt';


// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findOne(username: string): Promise<any> {
        return await this.userRepository.findOne({ username: username });
    }

    async findOneByEmail(email: string): Promise<any> {
        return this.userRepository.findOne({ email: email });
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async register(user: User): Promise<User> {
        const password = await hash(user.password, 10);
        const userToSave = {
            ...user,
            password: password
        }
        return this.userRepository.save(userToSave);
    }
}
