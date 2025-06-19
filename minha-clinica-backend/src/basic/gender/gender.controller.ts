import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateGenderDto } from './dto/createGender.dto';
import { UpdateGenderDto } from './dto/updateGender.dto';
import { GenderService } from './gender.service';

@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Get()
  async findAll() {
    return this.genderService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.genderService.findById(id);
  }

  @Post()
  async create(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(createGenderDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGenderDto: UpdateGenderDto,
  ) {
    return this.genderService.update(id, updateGenderDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.genderService.delete(id);
  }
}
