import { Column } from 'typeorm';

export class Address {
  @Column({ name: 'logradouro', length: 100, nullable: false })
  street: string;

  @Column({ name: 'numero', nullable: false })
  number: number;

  @Column({ name: 'complemento', length: 100, nullable: true })
  complement: string;

  @Column({ name: 'bairro', length: 100, nullable: false })
  neighborhood: string;

  @Column({ name: 'cep', length: 10, nullable: false })
  cep: string;

  @Column({ name: 'cidade_id', nullable: false })
  cityId: string;
}
