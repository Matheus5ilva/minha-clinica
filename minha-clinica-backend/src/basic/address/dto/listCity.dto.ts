import { City } from '../city.entity';

export class ListCityDto {
  id: number;
  name: string;
  ibgeCode: string;
  stateId: number;

  constructor(city: City) {
    this.id = city.id;
    this.name = city.name;
    this.ibgeCode = city.ibgeCode;
    this.stateId = city.stateId;
  }
}
