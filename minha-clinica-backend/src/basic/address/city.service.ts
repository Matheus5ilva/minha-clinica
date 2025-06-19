import { Injectable, NotFoundException } from '@nestjs/common';

import { City } from './city.entity';
import { CityRepository } from './city.repository';
import { ListCityDto } from './dto/listCity.dto';
@Injectable()
export class CityService {
  constructor(private readonly cityRepository: CityRepository) {}

  async listAll(): Promise<ListCityDto[]> {
    const list = await this.cityRepository.findAll();
    return list.map((city: City) => new ListCityDto(city));
  }

  async findById(id: number): Promise<ListCityDto> {
    const city = await this.cityRepository.findById(id);
    if (!city) {
      throw new NotFoundException('Cidade não encontrado');
    }
    console.log(city);
    return new ListCityDto(city);
  }
}
