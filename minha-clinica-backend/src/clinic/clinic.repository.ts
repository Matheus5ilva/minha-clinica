import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Clinic } from './clinic.entity';

@Injectable()
export class ClinicRepository {
  constructor(
    @InjectRepository(Clinic)
    private readonly repository: Repository<Clinic>,
  ) {}

  async findAll(): Promise<Clinic[]> {
    return this.repository.find({
      relations: ['people', 'people.address'],
    });
  }

  async findById(id: string): Promise<Clinic | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['people', 'people.address'],
    });
  }

  async create(clinic: Clinic): Promise<Clinic> {
    return this.repository.save(clinic);
  }

  async update(id: string, clinic: Partial<Clinic>): Promise<Clinic | null> {
    await this.repository.update(id, clinic);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
