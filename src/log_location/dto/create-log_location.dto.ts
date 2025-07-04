import { IsNumber, IsString } from 'class-validator';

export class CreateLogLocationDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;

  @IsString()
  trafo_id: string;
}
