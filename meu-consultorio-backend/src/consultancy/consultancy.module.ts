import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PeopleModule } from '../basic/people/people.module';
import { ConsultancyController } from './consultancy.controller';
import { Consultancy } from './consultancy.entity';
import { ConsultancyRepository } from './consultancy.repository';
import { ConsultancyService } from './consultancy.service';

@Module({
  imports: [TypeOrmModule.forFeature([Consultancy]), PeopleModule],
  controllers: [ConsultancyController],
  providers: [ConsultancyService, ConsultancyRepository],
  exports: [TypeOrmModule],
})
export class ConsultancyModule {}
