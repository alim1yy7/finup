import { Repository } from 'typeorm/repository/Repository';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepo: Repository<Transaction>
  ) {}

  async findAll(): Promise<Transaction[]> {
    return this.transactionRepo.find();
  }
  async createTransaction(transaction: Transaction): Promise<Transaction> {
    return this.transactionRepo.save(transaction);
  }
  async dateAmount(): Promise<Transaction[]> {
    return this.transactionRepo.find({
      select: ['date', 'amount'],
    });
  }
}
