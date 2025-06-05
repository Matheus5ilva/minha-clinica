import { Address } from '../address.entity';

export class AddressDto {
  street: string;
  number: number;
  complement: string | null;
  neighborhood: string;
  cep: string;
  cityId: number;

  constructor(address: Address) {
    this.street = address.street;
    this.number = address.number;
    this.complement = address.complement;
    this.neighborhood = address.neighborhood;
    this.cep = address.cep;
    this.cityId = Number(address.cityId);
  }
}
