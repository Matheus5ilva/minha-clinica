import { AddressDto } from 'src/basic/address/dto/address.dto';

export class UpdateClinicDto {
  // Campos da pessoa
  name: string;
  email: string;
  phone: number;
  whatsapp: number;
  status: boolean;
  address: AddressDto;

  // Campos da clínica
  cnpj: string;
  companyName: string;
}
