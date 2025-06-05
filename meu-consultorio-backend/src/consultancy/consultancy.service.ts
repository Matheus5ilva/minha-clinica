import { Injectable, NotFoundException } from '@nestjs/common';

import { Address } from '../basic/address/address.entity';
import { People } from '../basic/people/people.entity';
import { PeopleService } from '../basic/people/people.service';
import { StringUtil } from './../utils/stringUtil.util';
import { Consultancy } from './consultancy.entity';
import { ConsultancyRepository } from './consultancy.repository';
import { ConsultancyDto } from './dto/consultancy.dto';
import { CreateConsultancyDto } from './dto/createConsultancy.dto';
import { ListConsultancyDto } from './dto/listConsultancy.dto';
import { UpdateConsultancyDto } from './dto/updateConsultancy.dto';

@Injectable()
export class ConsultancyService {
  constructor(
    private readonly consultancyRepository: ConsultancyRepository,
    private readonly peopleService: PeopleService,
  ) {}

  async listAll() {
    const list = await this.consultancyRepository.findAll();
    return list.map(
      (consultancy: Consultancy) => new ListConsultancyDto(consultancy),
    );
  }

  async findById(id: string) {
    const consultancy = await this.consultancyRepository.findById(id);
    if (!consultancy) {
      throw new NotFoundException('Consultório não encontrado');
    }
    return new ConsultancyDto(consultancy);
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
    consultancy.cnpj = StringUtil.cleanCNPJ(createConsultancyDto.cnpj);
    consultancy.razao_social = createConsultancyDto.razao_social;
    consultancy.people = savedPeople;

    return this.consultancyRepository.create(consultancy);
  }

  async update(id: string, updateConsultancyDto: UpdateConsultancyDto) {
    const consultancy = await this.consultancyRepository.findById(id);
    if (!consultancy) {
      throw new NotFoundException('Consultório não encontrado');
    }

    const people = await this.peopleService.findById(consultancy.people.id);
    if (!people) {
      throw new NotFoundException('Pessoa não encontrada');
    }

    // Atualiza a pessoa
    people.name = updateConsultancyDto.name;
    people.email = updateConsultancyDto.email;
    people.phone = updateConsultancyDto.phone;
    people.whatsapp = updateConsultancyDto.whatsapp;
    people.status = updateConsultancyDto.status;
    people.updatedAt = new Date();

    // Atualiza o endereço
    people.address.street = updateConsultancyDto.address.street;
    people.address.number = updateConsultancyDto.address.number;
    people.address.complement = updateConsultancyDto.address.complement || null;
    people.address.neighborhood = updateConsultancyDto.address.neighborhood;
    people.address.cep = updateConsultancyDto.address.cep;
    people.address.cityId = updateConsultancyDto.address.cityId.toString();

    // Atualiza dados do consultório
    consultancy.cnpj = StringUtil.cleanCNPJ(updateConsultancyDto.cnpj);
    consultancy.razao_social = updateConsultancyDto.razao_social;

    await this.peopleService.update(id, people);
    return this.consultancyRepository.update(id, consultancy);
  }

  async delete(id: string) {
    const consultancy = await this.consultancyRepository.findById(id);
    if (!consultancy) {
      throw new NotFoundException('Consultório não encontrado');
    }

    const people = await this.peopleService.findById(consultancy.people.id);
    if (!people) {
      throw new NotFoundException('Pessoa não encontrada');
    }

    await this.consultancyRepository.delete(id);
    await this.peopleService.delete(people.id);
  }
}
