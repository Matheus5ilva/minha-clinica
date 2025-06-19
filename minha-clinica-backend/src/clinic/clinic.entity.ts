import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { People } from '../basic/people/people.entity';

@Entity({ name: 'clinica' })
export class Clinic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => People)
  @JoinColumn({ name: 'pessoa_id' })
  people: People;

  @Column({ length: 14, unique: true })
  cnpj: string;

  @Column({ name: 'razao_social', length: 100 })
  companyName: string;
}
