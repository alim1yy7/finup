import { Body, Controller, Get, Post } from '@nestjs/common';

import { Transaction } from './transaction.entity';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionSvc: TransactionService) {}
  @Get('all')
  async findAll() {
    return this.transactionSvc.findAll();
  }

  @Post('create')
  async createTransaction(@Body() transaction: Transaction) {
    return this.transactionSvc.createTransaction(transaction);
  }

  @Get('all-date-amount')
  async dateAmount() {
    return this.transactionSvc.dateAmount();
  }
}
