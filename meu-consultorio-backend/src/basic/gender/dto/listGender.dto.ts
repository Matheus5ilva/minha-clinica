import { Gender } from '../gender.entity';

export class ListGenderDto {
  id: string;
  name: string;

  constructor(gender: Gender) {
    this.id = gender.id;
    this.name = gender.name;
  }
}
