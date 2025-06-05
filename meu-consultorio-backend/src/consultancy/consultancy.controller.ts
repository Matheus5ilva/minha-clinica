import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ConsultancyService } from './consultancy.service';
import { CreateConsultancyDto } from './dto/createConsultancy.dto';
import { UpdateConsultancyDto } from './dto/updateConsultancy.dto';

@Controller('/consultancy')
export class ConsultancyController {
  constructor(private consultancyService: ConsultancyService) {}

  @Get()
  async listAll() {
    return await this.consultancyService.listAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.consultancyService.findById(id);
  }

  @Post()
  async create(@Body() createConsultancyDto: CreateConsultancyDto) {
    return this.consultancyService.create(createConsultancyDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateConsultancyDto: UpdateConsultancyDto,
  ) {
    return this.consultancyService.update(id, updateConsultancyDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.consultancyService.delete(id);
  }
}
