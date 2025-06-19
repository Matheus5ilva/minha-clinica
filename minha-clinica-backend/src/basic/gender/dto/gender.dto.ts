import { Gender } from '../gender.entity';

export class GenderDto {
  id: string;
  name: string;

  constructor(gender: Gender) {
    this.id = gender.id;
    this.name = gender.name;
  }
}
