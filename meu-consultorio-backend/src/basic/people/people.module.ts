import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PeopleController } from './people.controller';
import { People } from './people.entity';
import { PeopleRepository } from './people.repository';
import { PeopleService } from './people.service';

@Module({
  imports: [TypeOrmModule.forFeature([People])],
  controllers: [PeopleController],
  providers: [PeopleService, PeopleRepository],
  exports: [PeopleService],
})
export class PeopleModule {}
