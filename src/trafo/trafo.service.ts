import {
  HttpStatus,
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Trafo } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { Response } from 'src/Response/Response';
import { CreateTrafoDto } from './dto/create-trafo.dto';
import { UpdateTrafoDto } from './dto/update-trafo.dto';
import { generateTrafoId } from 'src/utils/GenerateID';
import { LogLocationService } from 'src/log_location/log_location.service';

@Injectable()
export class TrafoService {
  constructor(
    private prismaService: PrismaService,
    private logLocationService: LogLocationService,
  ) {}

  private readonly logger = new Logger();

  async getAll(): Promise<Response<Trafo[]>> {
    try {
      const allData = await this.prismaService.trafo.findMany();
      return {
        status: HttpStatus.OK,
        message: 'GET TRAFO DATA SUCCESS',
        data: allData,
      };
    } catch (error) {
      console.error(error);
      throw new UnprocessableEntityException(error);
    }
  }

  async get(id: string): Promise<Response<Trafo>> {
    try {
      const trafoData = await this.prismaService.trafo.findFirstOrThrow({
        where: {
          id,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'GET TRAFO DATA SUCCESSFUL!',
        data: trafoData,
      };
    } catch (error) {
      console.error(error);
      throw new UnprocessableEntityException(error);
    }
  }

  async insert(trafoDto: CreateTrafoDto): Promise<Response<Trafo>> {
    try {
      const allId = await this.prismaService.trafo.findMany({
        select: {
          id: true,
        },
      });

      const trafoLoc = await this.prismaService.location.findFirstOrThrow({
        where: {
          id: trafoDto.locationId,
        },
        select: {
          kode: true,
        },
      });

      const trafoNumber = generateTrafoId(allId);

      const trafoData = await this.prismaService.trafo.create({
        data: {
          id: `T-${trafoNumber}-${trafoLoc.kode}`,
          ...trafoDto,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'ADD TRAFO DATA SUCCESSFUL!',
        data: trafoData,
      };
    } catch (error) {
      console.error(error);
      throw new UnprocessableEntityException(error);
    }
  }

  async update(trafoDto: UpdateTrafoDto, id: string): Promise<Response<Trafo>> {
    try {
      const oldTrafoData = await this.prismaService.trafo.findFirstOrThrow({
        where: {
          id,
        },
      });

      if (
        oldTrafoData.lat !== trafoDto.lat &&
        oldTrafoData.lng !== trafoDto.lng &&
        (trafoDto.lat || trafoDto.lng)
      ) {
        this.logger.log('RUNNING INSERT TO LOG LOCATION PROCESS');
        const body = {
          lat: oldTrafoData.lat ? oldTrafoData.lat : 0,
          lng: oldTrafoData.lng ? oldTrafoData.lng : 0,
          trafo_id: id,
        };

        const result = await this.logLocationService.create(body);
        this.logger.log(result.message);
      }

      const updatedTrafo = await this.prismaService.trafo.update({
        data: {
          ...trafoDto,
        },
        where: {
          id: id,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'SUCCESS UPDATE TRAFO DATA',
        data: updatedTrafo,
      };
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException(error);
    }
  }

  async delete(id: string): Promise<Response<Trafo>> {
    try {
      await this.prismaService.trafo.delete({
        where: {
          id,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'SUCCESS DELETE TRAFO DATA',
        data: {} as Trafo,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
