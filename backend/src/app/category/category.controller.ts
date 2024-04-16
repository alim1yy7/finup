import { Body, Controller, Get, Post } from '@nestjs/common';

import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categorySvc: CategoryService) {}
  @Get('')
  async findAll() {
    return this.categorySvc.findAll();
  }

  @Post('create')
  async createCategory(@Body() category: Category) {
    return this.categorySvc.createCategory(category);
  }
}
