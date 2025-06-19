import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { City } from './city.entity';

@Injectable()
export class CityRepository {
  constructor(
    @InjectRepository(City)
    private readonly repository: Repository<City>,
  ) {}

  async findAll(): Promise<City[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<City | null> {
    return this.repository.findOne({
      where: { id },
    });
  }
}
