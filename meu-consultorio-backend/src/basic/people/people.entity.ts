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

  @Column(() => Address)
  address: Address;

  @Column({ name: 'email', nullable: false, length: 100 })
  email: string;

  @Column({ name: 'status', nullable: false, default: true })
  status: boolean;

  @Column({ name: 'whatsapp', nullable: false })
  whatsapp: string;
  /*
  lista de telefones
  @Column({ name: 'telefone' })
  phone: string[];
*/
  @CreateDateColumn({
    name: 'created_at',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
