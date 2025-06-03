import { Injectable } from '@nestjs/common';

import { People } from './people.entity';
import { PeopleRepository } from './people.repository';

@Injectable()
export class PeopleService {
  constructor(private readonly peopleRepository: PeopleRepository) {}

  async listAll() {
    return this.peopleRepository.findAll();
  }

  async findById(id: string) {
    return this.peopleRepository.findById(id);
  }

  async create(people: People) {
    return this.peopleRepository.create(people);
  }

  async update(id: string, people: Partial<People>) {
    return this.peopleRepository.update(id, people);
  }

  async delete(id: string) {
    await this.peopleRepository.delete(id);
  }
}
