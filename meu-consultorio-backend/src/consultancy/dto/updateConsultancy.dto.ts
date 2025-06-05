import { AddressDto } from 'src/basic/address/dto/address.dto';

export class UpdateConsultancyDto {
  // Campos da pessoa
  name: string;
  email: string;
  phone: number;
  whatsapp: number;
  status: boolean;
  address: AddressDto;

  // Campos do consultório
  cnpj: string;
  razao_social: string;
}
