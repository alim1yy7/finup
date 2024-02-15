import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  category?: string;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @Column()
  file?: string;
}
