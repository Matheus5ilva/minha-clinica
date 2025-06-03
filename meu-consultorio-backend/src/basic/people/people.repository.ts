import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { People } from './people.entity';

@Injectable()
export class PeopleRepository {
  constructor(
    @InjectRepository(People)
    private readonly repository: Repository<People>,
  ) {}

  async findAll(): Promise<People[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<People | null> {
    return this.repository.findOne({
      where: { id },
    });
  }

  async create(people: People): Promise<People> {
    return this.repository.save(people);
  }

  async update(id: string, people: Partial<People>): Promise<People | null> {
    await this.repository.update(id, people);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
