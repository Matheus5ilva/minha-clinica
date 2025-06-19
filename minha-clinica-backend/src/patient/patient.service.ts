import { Injectable, NotFoundException } from '@nestjs/common';
import { Address } from 'src/basic/address/address.entity';
import { People } from 'src/basic/people/people.entity';

import { PeopleService } from './../basic/people/people.service';
import { CreatePatientDto } from './dto/createPatient.dto';
import { ListPatientDto } from './dto/listPatient.dto';
import { Patient } from './patient.entity';
import { PatientRepository } from './patient.repository';

@Injectable()
export class PatientService {
  constructor(
    private readonly patientRepository: PatientRepository,
    private readonly peopleService: PeopleService,
  ) {}

  async listAll() {
    const list = await this.patientRepository.findAll();
    return list.map((patient: Patient) => new ListPatientDto(patient));
  }

  async findById(id: string) {
    const patient = await this.patientRepository.findById(id);
    if (!patient) {
      throw new NotFoundException('Paciente não encontrado');
    }
    return new ListPatientDto(patient);
  }

  async create(createPatientDto: CreatePatientDto) {
    // Primeiro, cria a pessoa
    const people = new People();
    people.name = createPatientDto.name;
    people.email = createPatientDto.email;
    people.phone = createPatientDto.phone;
    people.whatsapp = createPatientDto.whatsapp;
    people.status = createPatientDto.status;

    // Converte o DTO do endereço para a entidade
    const address = new Address();
    address.street = createPatientDto.address.street;
    address.number = createPatientDto.address.number;
    address.complement = createPatientDto.address.complement || '';
    address.neighborhood = createPatientDto.address.neighborhood;
    address.cep = createPatientDto.address.cep;
    address.cityId = createPatientDto.address.cityId.toString();

    people.address = address;

    const savedPeople = await this.peopleService.create(people);
    // Depois, cria o paciente
    const patient = new Patient();
    patient.id = savedPeople.id;
    patient.birthDate = createPatientDto.birthDate;
    //patient.gender = createPatientDto;
    patient.motherName = createPatientDto.motherName;
    patient.socialName = createPatientDto.socialName;
    patient.cpf = createPatientDto.cpf;
    patient.people = savedPeople;
    return await this.patientRepository.create(patient);
  }
}
