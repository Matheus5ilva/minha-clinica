import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleModule } from 'src/basic/people/people.module';

import { PatientController } from './patient.controller';
import { Patient } from './patient.entity';
import { PatientRepository } from './patient.repository';
import { PatientService } from './patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patient]), PeopleModule],
  controllers: [PatientController],
  providers: [PatientService, PatientRepository],
  exports: [TypeOrmModule],
})
export class PatientModule {}
