import { Controller, Get } from '@nestjs/common';

import { CityService } from './city.service';

@Controller('/city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async listAll() {
    return await this.cityService.listAll();
  }
  @Get(':id')
  async findById(id: number) {
    return this.cityService.findById(id);
  }
}
