import { Injectable } from '@nestjs/common';

import { Address } from '../basic/address/address.entity';
import { People } from '../basic/people/people.entity';
import { PeopleService } from '../basic/people/people.service';
import { Consultancy } from './consultancy.entity';
import { ConsultancyRepository } from './consultancy.repository';
import { CreateConsultancyDto } from './dto/createConsultancyDto';

@Injectable()
export class ConsultancyService {
  constructor(
    private readonly consultancyRepository: ConsultancyRepository,
    private readonly peopleService: PeopleService,
  ) {}

  async listAll() {
    return this.consultancyRepository.findAll();
  }

  async findById(id: string) {
    return this.consultancyRepository.findById(id);
  }

  async create(createConsultancyDto: CreateConsultancyDto) {
    // Primeiro, cria a pessoa
    const people = new People();
    people.name = createConsultancyDto.name;
    people.email = createConsultancyDto.email;
    people.phone = createConsultancyDto.phone;
    people.whatsapp = createConsultancyDto.whatsapp;
    people.status = createConsultancyDto.status;

    // Converte o DTO do endereço para a entidade
    const address = new Address();
    address.street = createConsultancyDto.address.street;
    address.number = createConsultancyDto.address.number;
    address.complement = createConsultancyDto.address.complement || null;
    address.neighborhood = createConsultancyDto.address.neighborhood;
    address.cep = createConsultancyDto.address.cep;
    address.cityId = createConsultancyDto.address.cityId.toString();

    people.address = address;

    const savedPeople = await this.peopleService.create(people);

    // Depois, cria o consultório
    const consultancy = new Consultancy();
    consultancy.id = savedPeople.id;
    consultancy.cnpj = createConsultancyDto.cnpj;
    consultancy.razao_social = createConsultancyDto.razao_social;
    consultancy.people = savedPeople;

    return this.consultancyRepository.create(consultancy);
  }

  async update(id: string, consultancy: Partial<Consultancy>) {
    return this.consultancyRepository.update(id, consultancy);
  }

  async delete(id: string) {
    await this.consultancyRepository.delete(id);
  }
}
