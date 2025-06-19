import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Patient } from './patient.entity';

@Injectable()
export class PatientRepository {
  constructor(
    @InjectRepository(Patient)
    private readonly repository: Repository<Patient>,
  ) {}

  async findAll(): Promise<Patient[]> {
    return this.repository.find({
      relations: ['people', 'people.address', 'gender'],
    });
  }

  async findById(id: string): Promise<Patient | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['people', 'people.address', 'gender'],
    });
  }

  async create(patient: Patient): Promise<Patient> {
    return this.repository.save(patient);
  }

  async update(id: string, patient: Partial<Patient>): Promise<Patient | null> {
    await this.repository.update(id, patient);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
