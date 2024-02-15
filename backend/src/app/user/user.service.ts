import { Repository } from 'typeorm/repository/Repository';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }
  async createUser(user: User): Promise<User> {
    return this.userRepo.save(user);
  }
  async findOne(id: string): Promise<User> {
    return this.userRepo.findOne({
      where: { id: id },
    });
  }
}
