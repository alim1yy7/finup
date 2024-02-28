import { Transaction } from 'typeorm';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { Category } from './category/category.entity';
import { CategoryModule } from './category/category.module';
import { CategoryService } from './category/category.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionService } from './transaction/transaction.service';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'finup',
      entities: [User, Transaction, Category],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    TransactionModule,
    CategoryModule,
  ],
  controllers: [
    AppController,
    UserController,
    TransactionController,
    CategoryController,
  ],
  providers: [AppService, UserService, TransactionService, CategoryService],
})
export class AppModule {}
