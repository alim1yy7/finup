import { Transaction } from 'typeorm';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
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
      entities: [User, Transaction],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    TransactionModule,
  ],
  controllers: [AppController, UserController, TransactionController],
  providers: [AppService, UserService, TransactionService],
})
export class AppModule {}
