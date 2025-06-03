import { Column } from 'typeorm';

export class Address {
  @Column({ name: 'logradouro', length: 100, nullable: false })
  street: string;

  @Column({ name: 'numero', type: 'int', nullable: false })
  number: number;

  @Column({ name: 'complemento', length: 100, nullable: true, type: 'varchar' })
  complement: string | null;

  @Column({ name: 'bairro', length: 100, nullable: false })
  neighborhood: string;

  @Column({ name: 'cep', length: 10, nullable: false })
  cep: string;

  @Column({ name: 'cidade_id', type: 'varchar', nullable: false })
  cityId: string;
}
