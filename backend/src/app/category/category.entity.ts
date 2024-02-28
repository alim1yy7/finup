import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @ManyToOne(() => Transaction, (transaction) => transaction.categorys)
  transaction: Transaction;
}
