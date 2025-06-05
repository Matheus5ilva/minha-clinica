import { AddressDto } from 'src/basic/address/dto/address.dto';

import { Consultancy } from '../consultancy.entity';

export class ConsultancyDto {
  id: string;
  name: string;
  email: string;
  phone: number;
  whatsapp: number;
  status: boolean;
  cnpj: string;
  razao_social: string;
  address: AddressDto;

  constructor(consultancy: Consultancy) {
    this.id = consultancy.id;
    this.name = consultancy.people.name;
    this.email = consultancy.people.email;
    this.phone = consultancy.people.phone;
    this.whatsapp = consultancy.people.whatsapp;
    this.status = consultancy.people.status;
    this.cnpj = consultancy.cnpj;
    this.razao_social = consultancy.razao_social;
    this.address = new AddressDto(consultancy.people.address);
  }
}
