import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Consultancy } from './consultancy.entity';

@Injectable()
export class ConsultancyRepository {
  constructor(
    @InjectRepository(Consultancy)
    private readonly repository: Repository<Consultancy>,
  ) {}

  async findAll(): Promise<Consultancy[]> {
    return this.repository.find({
      relations: ['people'],
    });
  }

  async findById(id: string): Promise<Consultancy | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['people'],
    });
  }

  async create(consultancy: Consultancy): Promise<Consultancy> {
    return this.repository.save(consultancy);
  }

  async update(
    id: string,
    consultancy: Partial<Consultancy>,
  ): Promise<Consultancy | null> {
    await this.repository.update(id, consultancy);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
