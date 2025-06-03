import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Address } from '../address/address.entity';

@Entity({ name: 'pessoa' })
export class People {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  name: string;

  @Column(() => Address, { prefix: 'endereco' })
  address: Address;

  @Column({ name: 'email', nullable: false, length: 70 })
  email: string;

  @Column({ name: 'status', nullable: false, default: true })
  status: boolean;

  @Column({ name: 'whatsapp', nullable: false })
  whatsapp: number;

  @Column({ name: 'telefone', nullable: false })
  phone: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    precision: 0,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    precision: 0,
  })
  updatedAt: Date;
}
