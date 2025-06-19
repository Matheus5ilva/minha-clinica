import { Patient } from './../patient.entity';
export class ListPatientDto {
  id: string;
  name: string;
  socialName: string;
  birthDate: Date;
  cpf: string;
  motherName: string;

  constructor(patient: Patient) {
    this.id = patient.id;
    this.name = patient.people.name;
    this.socialName = patient.socialName;
    this.birthDate = patient.birthDate;
    this.cpf = patient.cpf;
    this.motherName = patient.motherName;
  }
}
