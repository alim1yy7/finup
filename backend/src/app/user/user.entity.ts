import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { IUser } from '@finup/types';

import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @OneToMany(() => Transaction, (transaction) => transaction.user, {
    eager: true,
  })
  transactions: Transaction[];
}
