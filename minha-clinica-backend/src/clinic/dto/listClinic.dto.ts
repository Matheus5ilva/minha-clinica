import { Clinic } from '../clinic.entity';

export class ListClinicDto {
  id: string;
  name: string;
  cnpj: string;
  companyName: string;
  email: string;
  phone: number;

  constructor(clinic: Clinic) {
    if (clinic) {
      this.id = clinic.id;
      this.cnpj = clinic.cnpj;
      this.companyName = clinic.companyName;
      this.name = clinic.people?.name;
      this.email = clinic.people?.email;
      this.phone = clinic.people?.phone;
    }
  }
}
