/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMonitoringDto {
  @IsNotEmpty()
  @IsNumber()
  suhu: number;

  @IsNotEmpty()
  @IsNumber()
  volt: number;

  @IsNotEmpty()
  @IsNumber()
  arus1: number;

  @IsNotEmpty()
  @IsNumber()
  arus2: number;

  @IsNotEmpty()
  @IsNumber()
  arus3: number;

  @IsString()
  @IsNotEmpty()
  trafoId: string;
}
