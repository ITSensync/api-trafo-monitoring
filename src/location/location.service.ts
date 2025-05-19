import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { Response } from 'src/Response/Response';
import { Location } from '@prisma/client';
import { UpdateLocationDto } from './dto/update-location.dto';

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

  async get(includeTrafo: boolean): Promise<Response<Location[]>> {
    try {
      const result = await this.prismaService.location.findMany({
        include: {
          trafos: includeTrafo,
        },
      });

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

  async getOne(id: string, includeTrafo: boolean): Promise<Response<Location>> {
    try {
      const locationData = await this.prismaService.location.findFirstOrThrow({
        where: {
          id,
        },
        include: {
          trafos: includeTrafo,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'GET LOCATION DATA SUCCESS!',
        data: locationData,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async update(
    id: string,
    locationDto: UpdateLocationDto,
  ): Promise<Response<Location>> {
    try {
      const updatedData = await this.prismaService.location.update({
        data: {
          ...locationDto,
        },
        where: {
          id,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'UPDATE LOCATION DATA SUCCESS!',
        data: updatedData,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async remove(id: string): Promise<Response<Location>> {
    try {
      await this.prismaService.location.delete({
        where: {
          id,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'DELETE LOCATION DATA SUCCESS!',
        data: {} as Location,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
