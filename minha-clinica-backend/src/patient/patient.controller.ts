import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreatePatientDto } from './dto/createPatient.dto';
import { PatientService } from './patient.service';

@Controller('/patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  async listAll() {
    return await this.patientService.listAll();
  }

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    return await this.patientService.create(createPatientDto);
  }
}
