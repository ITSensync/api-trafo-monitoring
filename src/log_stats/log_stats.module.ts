import { Module } from '@nestjs/common';
import { LogStatsController } from './log_stats.controller';
import { LogStatsService } from './log_stats.service';
import { PrismaService } from 'prisma/prisma.service';
import { MonitoringService } from 'src/monitoring/monitoring.service';

@Module({
  controllers: [LogStatsController],
  providers: [LogStatsService, PrismaService, MonitoringService],
})
export class LogStatsModule {}
