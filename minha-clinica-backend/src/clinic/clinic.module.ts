import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PeopleModule } from '../basic/people/people.module';
import { ClinicController } from './clinic.controller';
import { Clinic } from './clinic.entity';
import { ClinicRepository } from './clinic.repository';
import { ClinicService } from './clinic.service';

@Module({
  imports: [TypeOrmModule.forFeature([Clinic]), PeopleModule],
  controllers: [ClinicController],
  providers: [ClinicService, ClinicRepository],
  exports: [TypeOrmModule],
})
export class ClinicModule {}
