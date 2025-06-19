import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { State } from './state.entity';

@Entity({ name: 'cidade' })
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome', length: 100, nullable: false })
  name: string;

  @Column({ name: 'codigo_ibge', nullable: false })
  ibgeCode: string;

  @ManyToOne(() => State, { nullable: false })
  @JoinColumn({ name: 'estado_id' })
  stateId: number;
}
