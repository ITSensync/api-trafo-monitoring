/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  HttpStatus,
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Log_Stats } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { MonitoringService } from 'src/monitoring/monitoring.service';
import { Response } from 'src/Response/Response';

@Injectable()
export class LogStatsService {
  constructor(
    private prismaService: PrismaService,
    private monitoringService: MonitoringService,
  ) {}

  private readonly logger = new Logger(LogStatsService.name);

  async add(): Promise<Response<Log_Stats>> {
    try {
      const statsResult = await this.monitoringService.stats();

      if (statsResult.status !== HttpStatus.OK) {
        return {
          status: HttpStatus.BAD_REQUEST,
          message: 'GET STATS FAILED',
          data: {} as Log_Stats,
        };
      }

      const result = await this.prismaService.log_Stats.create({
        data: {
          total_temp: statsResult.data.trafoMoreThan90C,
          total_volt: statsResult.data.lessThan250V,
          total_arus1: statsResult.data.moreThan300A1,
          total_arus2: statsResult.data.moreThan300A2,
          total_arus3: statsResult.data.moreThan300A3,
        },
      });

      return {
        status: HttpStatus.OK,
        message: 'ADD TO LOG_STATS SUCCESS',
        data: result,
      };
    } catch (error) {
      console.error(error);
      throw new UnprocessableEntityException(error);
    }
  }

  async getAll(date: string): Promise<Response<Log_Stats[]>> {
    try {
      const now = new Date();
      const plus7 = new Date(now.getTime() + 7 * 60 * 60 * 1000);
      const dateOnly = plus7.toISOString().split('T')[0];

      const targetDate = date ? date : dateOnly;

      const startOfDay = new Date(`${targetDate}T00:00:00.000Z`);
      const endOfDay = new Date(`${targetDate}T23:59:59.999Z`);

      const filter = {
        time: {
          gte: startOfDay,
          lte: endOfDay,
        },
      };

      const logData = await this.prismaService.log_Stats.findMany({
        where: filter,
      });

      return {
        status: HttpStatus.OK,
        message: 'GET LOG STATS DATA SUCCESS',
        data: logData,
      };
    } catch (error) {
      console.error(error);
      throw new UnprocessableEntityException(error);
    }
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async cronAdd() {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    this.logger.log(`RUNNING CRON ADD LOG STATS TO DATABASE: ${new Date()}`);
    await this.add();
  }
}
