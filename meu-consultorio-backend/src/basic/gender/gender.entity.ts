import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';

@Entity({ name: 'genero' })
export class Gender {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'genero', length: 100, unique: true })
  name: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    precision: 0,
    update: false,
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    nullable: true,
    precision: 0,
  })
  updatedAt: Date;
}
