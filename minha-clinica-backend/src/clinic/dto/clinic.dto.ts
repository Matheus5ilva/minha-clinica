import { AddressDto } from '../../basic/address/dto/address.dto';
import { Clinic } from '../clinic.entity';

export class ClinicDto {
  id: string;
  name: string;
  email: string;
  phone: number;
  whatsapp: number;
  status: boolean;
  cnpj: string;
  companyName: string;
  address: AddressDto;

  constructor(clinic: Clinic) {
    if (clinic) {
      this.id = clinic.id;
      this.name = clinic.people?.name;
      this.email = clinic.people?.email;
      this.phone = clinic.people?.phone;
      this.whatsapp = clinic.people?.whatsapp;
      this.status = clinic.people?.status;
      this.cnpj = clinic.cnpj;
      this.companyName = clinic.companyName;
      this.address = new AddressDto(clinic.people.address);
    }
  }
}
