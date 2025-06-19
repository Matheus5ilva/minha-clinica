import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CityController } from './city.controller';
import { City } from './city.entity';
import { CityRepository } from './city.repository';
import { CityService } from './city.service';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CityController],
  providers: [CityService, CityRepository],
  exports: [TypeOrmModule],
})
export class CityModule {}
