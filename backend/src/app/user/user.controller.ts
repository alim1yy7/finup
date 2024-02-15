import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userSvc: UserService) {}
  @Get('all')
  async findAll() {
    return this.userSvc.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.userSvc.findOne(id);
  }

  @Post('create')
  async createUser(@Body() user: User) {
    return this.userSvc.createUser(user);
  }
}
