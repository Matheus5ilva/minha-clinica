import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PeopleModule } from './basic/people/people.module';
import { DBConfigService } from './config/db.config.service';
import { ConsultancyModule } from './consultancy/consultancy.module';

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
    ConsultancyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
