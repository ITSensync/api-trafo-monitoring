import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMonitoringDto {
  @IsNotEmpty()
  @IsNumber()
  suhu_cpu: number;

  @IsNotEmpty()
  @IsNumber()
  suhu_trafo: number;

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
