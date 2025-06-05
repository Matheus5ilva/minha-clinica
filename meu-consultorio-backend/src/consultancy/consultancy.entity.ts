import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { People } from '../basic/people/people.entity';

@Entity({ name: 'consultorio' })
export class Consultancy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => People)
  @JoinColumn({ name: 'pessoa_id' })
  people: People;

  @Column({ length: 14, unique: true })
  cnpj: string;

  @Column({ length: 100 })
  razao_social: string;
}
