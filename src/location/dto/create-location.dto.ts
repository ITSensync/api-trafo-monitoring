/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lang: number;

  @IsString()
  nama: string;

  @IsString()
  alamat: string;
}
