import { Repository } from 'typeorm/repository/Repository';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepo.find();
  }
  async createCategory(ctg: Category): Promise<Category> {
    return this.categoryRepo.save(ctg);
  }
}
