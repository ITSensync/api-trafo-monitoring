import { Module } from '@nestjs/common';
import { MonitoringService } from './monitoring.service';
import { MonitoringController } from './monitoring.controller';
import { PrismaService } from 'prisma/prisma.service';
import { MonitoringGateway } from './gateway/monitoring.gateway';

@Module({
  controllers: [MonitoringController],
  providers: [MonitoringService, PrismaService, MonitoringGateway],
})
export class MonitoringModule {}
