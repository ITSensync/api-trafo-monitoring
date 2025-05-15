import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateMonitoringDto } from './dto/create-monitoring.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Monitoring } from '@prisma/client';
import { Response } from 'src/Response/Response';

@Injectable()
export class MonitoringService {
  constructor(private prismaService: PrismaService) {}

  async insert(
    monitoringDto: CreateMonitoringDto,
  ): Promise<Response<Monitoring>> {
    try {
      // const now = DateTime.local();

      const result = await this.prismaService.monitoring.create({
        data: {
          ...monitoringDto,
          // createdAt: now.toJSDate(),
        },
      });

      return {
        data: result,
        message: 'INSERT MONITORING DATA SUCCESS',
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException(error);
    }
  }

  async get(): Promise<Response<Monitoring[]>> {
    try {
      const result = await this.prismaService.monitoring.findMany();
      return {
        data: result,
        message: 'GET ALL MONITORING DATA SUCCESS',
        status: HttpStatus.OK,
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
