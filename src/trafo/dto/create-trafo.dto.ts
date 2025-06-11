import { IsNumber, IsString } from 'class-validator';

export class CreateTrafoDto {
  @IsString()
  type: string;
  @IsNumber()
  kapasitas: number;
  @IsNumber()
  lat: number;
  @IsNumber()
  lng: number;
  @IsString()
  locationId: string;
}
