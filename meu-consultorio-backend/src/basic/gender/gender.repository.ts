import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Gender } from './gender.entity';

@Injectable()
export class GenderRepository {
  constructor(
    @InjectRepository(Gender)
    private readonly repository: Repository<Gender>,
  ) {}

  async findAll(): Promise<Gender[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Gender | null> {
    return this.repository.findOne({ where: { id } });
  }

  async create(gender: Gender): Promise<Gender> {
    return this.repository.save(gender);
  }

  async update(id: string, gender: Partial<Gender>): Promise<Gender | null> {
    await this.repository.update(id, gender);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
