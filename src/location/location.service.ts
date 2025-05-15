import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { Response } from 'src/Response/Response';
import { Location } from '@prisma/client';

@Injectable()
export class LocationService {
  constructor(private prismaService: PrismaService) {}

  async add(locationDto: CreateLocationDto): Promise<Response<Location>> {
    try {
      const addedData = await this.prismaService.location.create({
        data: locationDto,
      });

      return {
        status: HttpStatus.CREATED,
        message: 'CREATE TRAFO LOCATION SUCCESS',
        data: addedData,
      };
    } catch (error) {
      console.error(error);
      throw new UnprocessableEntityException(error);
    }
  }

  async get(): Promise<Response<Location[]>> {
    try {
      const result = await this.prismaService.location.findMany();

      return {
        status: HttpStatus.OK,
        message: 'GET ALL LOCATION SUCCESS',
        data: result,
      };
    } catch (error) {
      console.error(error);
      throw new UnprocessableEntityException(error);
    }
  }
}
