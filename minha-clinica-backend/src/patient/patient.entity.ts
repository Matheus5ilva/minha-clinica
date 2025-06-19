import { Gender } from 'src/basic/gender/gender.entity';
import { People } from 'src/basic/people/people.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'paciente' })
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => People)
  @JoinColumn({ name: 'pessoa_id' })
  people: People;

  @Column({ name: 'data_nascimento', type: 'date', nullable: false })
  birthDate: Date;

  @Column({ length: 14, unique: true })
  cpf: string;

  @Column({ name: 'nome_mae', length: 100, nullable: true })
  motherName: string;

  @Column({ name: 'nome_social', length: 100 })
  socialName: string;

  @OneToOne(() => Gender)
  @JoinColumn({ name: 'sexo_id' })
  gender: Gender;
}
