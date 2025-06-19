import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ClinicService } from './clinic.service';
import { CreateClinicDto } from './dto/createClinic.dto';
import { UpdateClinicDto } from './dto/updateClinic.dto';

@Controller('/clinic')
export class ClinicController {
  constructor(private clinicService: ClinicService) {}

  @Get()
  async listAll() {
    return await this.clinicService.listAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.clinicService.findById(id);
  }

  @Post()
  async create(@Body() createClinicDto: CreateClinicDto) {
    return this.clinicService.create(createClinicDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClinicDto: UpdateClinicDto,
  ) {
    return this.clinicService.update(id, updateClinicDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.clinicService.delete(id);
  }
}
