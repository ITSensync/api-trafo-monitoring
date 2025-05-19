import { IsNumber, IsString } from 'class-validator';

export class CreateTrafoDto {
  @IsString()
  type: string;
  @IsNumber()
  kapasitas: number;
  @IsString()
  locationId: string;
}
