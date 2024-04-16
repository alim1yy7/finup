import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ICategory } from '@finup/types';

import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class Category implements ICategory {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  label: string;

  @OneToMany(() => Transaction, (transaction) => transaction.category, {
    eager: true,
  })
  transactions: Transaction[];
}
