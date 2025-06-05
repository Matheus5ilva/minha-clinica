import { Consultancy } from '../consultancy.entity';

export class ListConsultancyDto {
  id: string;
  name: string;
  cnpj: string;
  razaoSocial: string;
  email: string;
  phone: number;

  constructor(consultancy: Consultancy) {
    this.id = consultancy.id;
    this.cnpj = consultancy.cnpj;
    this.razaoSocial = consultancy.razao_social;
    this.name = consultancy.people.name;
    this.email = consultancy.people.email;
    this.phone = consultancy.people.phone;
  }
}
