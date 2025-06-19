import { Injectable, NotFoundException } from '@nestjs/common';

import { Address } from '../basic/address/address.entity';
import { People } from '../basic/people/people.entity';
import { PeopleService } from '../basic/people/people.service';
import { StringUtil } from './../utils/stringUtil.util';
import { Clinic } from './clinic.entity';
import { ClinicRepository } from './clinic.repository';
import { ClinicDto } from './dto/clinic.dto';
import { CreateClinicDto } from './dto/createClinic.dto';
import { ListClinicDto } from './dto/listClinic.dto';
import { UpdateClinicDto } from './dto/updateClinic.dto';

@Injectable()
export class ClinicService {
  constructor(
    private readonly clinicRepository: ClinicRepository,
    private readonly peopleService: PeopleService,
  ) {}

  async listAll(): Promise<ListClinicDto[]> {
    const list = await this.clinicRepository.findAll();
    return list.map((clinic: Clinic) => new ListClinicDto(clinic));
  }

  async findById(id: string): Promise<ClinicDto> {
    const clinic = await this.clinicRepository.findById(id);
    if (!clinic) {
      throw new NotFoundException('Clínica não encontrada');
    }
    return new ClinicDto(clinic);
  }

  async create(createClinicDto: CreateClinicDto) {
    // Primeiro, cria a pessoa
    const people = new People();
    people.name = createClinicDto.name;
    people.email = createClinicDto.email;
    people.phone = createClinicDto.phone;
    people.whatsapp = createClinicDto.whatsapp;
    people.status = createClinicDto.status;

    // Converte o DTO do endereço para a entidade
    const address = new Address();
    address.street = createClinicDto.address.street;
    address.number = createClinicDto.address.number;
    address.complement = createClinicDto.address.complement || '';
    address.neighborhood = createClinicDto.address.neighborhood;
    address.cep = createClinicDto.address.cep;
    address.cityId = createClinicDto.address.cityId.toString();

    people.address = address;

    const savedPeople = await this.peopleService.create(people);

    // Depois, cria a clínica
    const clinic = new Clinic();
    clinic.id = savedPeople.id;
    clinic.cnpj = StringUtil.cleanCNPJ(createClinicDto.cnpj);
    clinic.companyName = createClinicDto.companyName;
    clinic.people = savedPeople;

    return this.clinicRepository.create(clinic);
  }

  async update(id: string, updateClinicDto: UpdateClinicDto) {
    const clinic = await this.clinicRepository.findById(id);
    if (!clinic) {
      throw new NotFoundException('Clínica não encontrada');
    }

    const people = await this.peopleService.findById(clinic.people.id);
    if (!people) {
      throw new NotFoundException('Pessoa não encontrada');
    }

    // Atualiza a pessoa
    people.name = updateClinicDto.name;
    people.email = updateClinicDto.email;
    people.phone = updateClinicDto.phone;
    people.whatsapp = updateClinicDto.whatsapp;
    people.status = updateClinicDto.status;
    people.updatedAt = new Date();

    // Atualiza o endereço
    people.address.street = updateClinicDto.address.street;
    people.address.number = updateClinicDto.address.number;
    people.address.complement = updateClinicDto.address.complement || '';
    people.address.neighborhood = updateClinicDto.address.neighborhood;
    people.address.cep = updateClinicDto.address.cep;
    people.address.cityId = updateClinicDto.address.cityId.toString();

    // Atualiza dados da clínica
    clinic.cnpj = StringUtil.cleanCNPJ(updateClinicDto.cnpj);
    clinic.companyName = updateClinicDto.companyName;

    await this.peopleService.update(id, people);
    return this.clinicRepository.update(id, clinic);
  }

  async delete(id: string) {
    const clinic = await this.clinicRepository.findById(id);
    if (!clinic) {
      throw new NotFoundException('Clínica não encontrada');
    }

    const people = await this.peopleService.findById(clinic.people.id);
    if (!people) {
      throw new NotFoundException('Pessoa não encontrada');
    }

    await this.clinicRepository.delete(id);
    await this.peopleService.delete(people.id);
  }
}
