import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
  @Get('by-user/:id')
  async getByUserId(@Param(':id') id: string) {
    return this.transactionSvc.getByUserId(id);
  }
  @Get('range/:first/:last')
  async getInRange(
    @Param('id') userID: string,
    @Param('first') first: Date,
    @Param('last') last: Date
  ) {
    return this.transactionSvc.getInRange(userID, first, last);
  }
}
