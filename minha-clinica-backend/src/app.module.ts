import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClinicModule } from './clinic/clinic.module';
import { DBConfigService } from './config/db.config.service';
import { GenderModule } from './basic/gender/gender.module';
import { PatientModule } from './patient/patient.module';
import { PeopleModule } from './basic/people/people.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DBConfigService,
      inject: [ConfigService],
    }),
    PeopleModule,
    ClinicModule,
    GenderModule,
    PatientModule,
  ],
})
export class AppModule {}
