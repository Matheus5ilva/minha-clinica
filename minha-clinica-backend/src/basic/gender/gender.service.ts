import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateGenderDto } from './dto/createGender.dto';
import { GenderDto } from './dto/gender.dto';
import { ListGenderDto } from './dto/listGender.dto';
import { UpdateGenderDto } from './dto/updateGender.dto';
import { Gender } from './gender.entity';
import { GenderRepository } from './gender.repository';

@Injectable()
export class GenderService {
  constructor(private readonly genderRepository: GenderRepository) {}

  async findAll(): Promise<ListGenderDto[]> {
    const list = await this.genderRepository.findAll();
    return list.map((gender: Gender) => new ListGenderDto(gender));
  }

  async findById(id: string): Promise<GenderDto | null> {
    const gender = await this.genderRepository.findById(id);
    if (!gender) {
      throw new NotFoundException('Gênero não encontrado');
    }
    return new GenderDto(gender);
  }

  async create(createGenderDto: CreateGenderDto): Promise<GenderDto> {
    const gender = new Gender();
    gender.name = createGenderDto.name;
    return this.genderRepository.create(gender);
  }

  async update(
    id: string,
    updateGenderDto: UpdateGenderDto,
  ): Promise<GenderDto> {
    const gender = await this.genderRepository.findById(id);
    if (!gender) {
      throw new NotFoundException('Gênero não encontrado');
    }
    gender.name = updateGenderDto.name;
    await this.genderRepository.update(id, gender);
    return new GenderDto(gender);
  }

  async delete(id: string): Promise<void> {
    const gender = await this.genderRepository.findById(id);
    if (!gender) {
      throw new NotFoundException('Gênero não encontrado');
    }
    await this.genderRepository.delete(id);
  }
}
