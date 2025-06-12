import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GenderController } from './gender.controller';
import { Gender } from './gender.entity';
import { GenderRepository } from './gender.repository';
import { GenderService } from './gender.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gender])],
  controllers: [GenderController],
  providers: [GenderService, GenderRepository],
})
export class GenderModule {}
