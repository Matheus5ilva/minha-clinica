import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'estado' })
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome', length: 100, nullable: false })
  name: string;

  @Column({ name: 'sigla', length: 2, nullable: false })
  initials: string;
}
