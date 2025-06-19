import { AddressDto } from '../../basic/address/dto/address.dto';

export class CreatePatientDto {
  // Campos da pessoa
  name: string;
  email: string;
  phone: number;
  whatsapp: number;
  status: boolean;
  address: AddressDto;

  // Campos do paciente
  birthDate: Date;
  //genderId: number;
  motherName: string;
  socialName: string;
  cpf: string;
}
