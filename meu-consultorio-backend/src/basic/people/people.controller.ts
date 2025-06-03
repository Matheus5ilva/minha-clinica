import { Controller, Get } from '@nestjs/common';

import { PeopleService } from './people.service';

@Controller('/people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}

  @Get()
  async listAll() {
    const people = await this.peopleService.listAll();
    return people;
  }
}
