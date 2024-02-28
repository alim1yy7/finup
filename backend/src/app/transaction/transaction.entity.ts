import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Category } from '../category/category.entity';
import { User } from '../user/user.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount: number;

  @Column()
  name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @OneToMany(() => Category, (category) => category.transaction, {
    eager: true,
  })
  categorys: Category[];

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @Column()
  file?: string;
}
