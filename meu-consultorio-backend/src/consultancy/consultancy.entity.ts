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

  @Column()
  cnpj: string;

  @Column()
  razao_social: string;
}
