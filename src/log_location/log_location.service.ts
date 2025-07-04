/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateLogLocationDto } from './dto/create-log_location.dto';
import { Response } from 'src/Response/Response';
import { Log_Location } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LogLocationService {
  constructor(private prismaService: PrismaService) {}

  async create(
    createLogLocationDto: CreateLogLocationDto,
  ): Promise<Response<Log_Location>> {
    try {
      const result = await this.prismaService.log_Location.create({
        data: createLogLocationDto,
      });

      return {
        status: HttpStatus.OK,
        message: 'INSERT NEW LOG LOCATION SUCCESS',
        data: result,
      };
    } catch (error) {
      console.error(error);
      throw new UnprocessableEntityException(error);
    }
  }

  async findAll(): Promise<Response<Log_Location[]>> {
    try {
      const result = await this.prismaService.log_Location.findMany();

      return {
        status: HttpStatus.OK,
        message: 'GET LOG LOCATION SUCCESS',
        data: result,
      };
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException(error);
    }
  }
}
