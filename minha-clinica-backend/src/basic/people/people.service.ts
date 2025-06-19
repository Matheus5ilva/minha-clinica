import { Injectable } from '@nestjs/common';

import { People } from './people.entity';
import { PeopleRepository } from './people.repository';

@Injectable()
export class PeopleService {
  constructor(private readonly peopleRepository: PeopleRepository) {}

  async listAll(): Promise<People[]> {
    return this.peopleRepository.findAll();
  }

  async findById(id: string): Promise<People | null> {
    return this.peopleRepository.findById(id);
  }

  async create(people: People): Promise<People> {
    return this.peopleRepository.create(people);
  }

  async update(id: string, people: Partial<People>): Promise<People | null> {
    return this.peopleRepository.update(id, people);
  }

  async delete(id: string): Promise<void> {
    await this.peopleRepository.delete(id);
  }
}
