/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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

  async getLatest() {
    try {
      const latestData = await this.prismaService.monitoring.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        take: 1,
      });
      return {
        status: HttpStatus.OK,
        message: 'GET LATEST TRAFO DATA SUCCESS!',
        data: latestData,
      };
    } catch (error) {
      console.log(error);
      throw new UnprocessableEntityException(error);
    }
  }

  async graph() {
    const result = await this.prismaService.$queryRawUnsafe<any>(`
      SELECT 
        HOUR(createdAt) AS jam,
        COUNT(*) AS jumlah
      FROM Monitoring
      WHERE suhu_trafo > 90
        AND DATE(createdAt) = CURDATE()
      GROUP BY HOUR(createdAt)
      ORDER BY jam
    `);

    const fullGraphData = Array.from({ length: 24 }, (_, i) => {
      const found = result.find((r) => r.jam === i);
      return {
        jam: i,
        jumlah: found ? Number(found.jumlah) : 0,
      };
    });

    return {
      status: HttpStatus.OK,
      message: 'GET TRAFO GRAPH DATA SUCCESS!',
      data: fullGraphData,
    };
  }

  async stats() {
    try {
      const allDevice = await this.prismaService.trafo.count();
      const activeDevice = await this.prismaService.trafo.count({
        where: {
          status: 'AKTIF',
        },
      });
      const inactiveDevice = await this.prismaService.trafo.count({
        where: {
          status: 'TIDAK_AKTIF',
        },
      });

      const tempTrafo90CData = await this.prismaService
        .$queryRawUnsafe<number>(`
        SELECT COUNT(*) as count
        FROM Monitoring m
        INNER JOIN (
            SELECT trafoId, MAX(createdAt) AS latest
            FROM Monitoring
            GROUP BY trafoId
        ) latest_per_trafo
        ON m.trafoId = latest_per_trafo.trafoId AND m.createdAt = latest_per_trafo.latest
        WHERE m.suhu_trafo > 90;
      `);

      const tempCpu90CData = await this.prismaService.$queryRawUnsafe<number>(`
        SELECT COUNT(*) as count
        FROM Monitoring m
        INNER JOIN (
            SELECT trafoId, MAX(createdAt) AS latest
            FROM Monitoring
            GROUP BY trafoId
        ) latest_per_trafo
        ON m.trafoId = latest_per_trafo.trafoId AND m.createdAt = latest_per_trafo.latest
        WHERE m.suhu_cpu > 90;
      `);

      const volt250Data = await this.prismaService.$queryRawUnsafe<number>(`
        SELECT COUNT(*) as count
        FROM Monitoring m
        INNER JOIN (
            SELECT trafoId, MAX(createdAt) AS latest
            FROM Monitoring
            GROUP BY trafoId
        ) latest_per_trafo
        ON m.trafoId = latest_per_trafo.trafoId AND m.createdAt = latest_per_trafo.latest
        WHERE m.volt < 250;
      `);

      const phase1Data = await this.prismaService.$queryRawUnsafe<number>(`
        SELECT COUNT(*) as count
        FROM Monitoring m
        INNER JOIN (
            SELECT trafoId, MAX(createdAt) AS latest
            FROM Monitoring
            GROUP BY trafoId
        ) latest_per_trafo
        ON m.trafoId = latest_per_trafo.trafoId AND m.createdAt = latest_per_trafo.latest
        WHERE m.arus1 > 300;
      `);

      const phase2Data = await this.prismaService.$queryRawUnsafe<number>(`
        SELECT COUNT(*) as count
        FROM Monitoring m
        INNER JOIN (
            SELECT trafoId, MAX(createdAt) AS latest
            FROM Monitoring
            GROUP BY trafoId
        ) latest_per_trafo
        ON m.trafoId = latest_per_trafo.trafoId AND m.createdAt = latest_per_trafo.latest
        WHERE m.arus2 > 300;
      `);

      const phase3Data = await this.prismaService.$queryRawUnsafe<number>(`
        SELECT COUNT(*) as count
        FROM Monitoring m
        INNER JOIN (
            SELECT trafoId, MAX(createdAt) AS latest
            FROM Monitoring
            GROUP BY trafoId
        ) latest_per_trafo
        ON m.trafoId = latest_per_trafo.trafoId AND m.createdAt = latest_per_trafo.latest
        WHERE m.arus3 > 300;
      `);

      return {
        status: HttpStatus.OK,
        message: 'GET STATISTIC TRAFO SUCCESS!',
        data: {
          allDevice,
          activeDevice,
          inactiveDevice,
          cpuMoreThan90C: Number(tempCpu90CData[0].count),
          trafoMoreThan90C: Number(tempTrafo90CData[0].count),
          lessThan250V: Number(volt250Data[0].count),
          moreThan300A1: Number(phase1Data[0].count),
          moreThan300A2: Number(phase2Data[0].count),
          moreThan300A3: Number(phase3Data[0].count),
          lastUpdate: new Date(),
        },
      };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
