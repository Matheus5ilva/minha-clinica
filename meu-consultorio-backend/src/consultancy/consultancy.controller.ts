import { Body, Controller, Get, Post } from '@nestjs/common';

import { ConsultancyService } from './consultancy.service';
import { CreateConsultancyDto } from './dto/createConsultancyDto';

@Controller('/consultancy')
export class ConsultancyController {
  constructor(private consultancyService: ConsultancyService) {}

  @Get()
  async listAll() {
    return this.consultancyService.listAll();
  }

  @Post()
  async create(@Body() createConsultancyDto: CreateConsultancyDto) {
    return this.consultancyService.create(createConsultancyDto);
  }
}
