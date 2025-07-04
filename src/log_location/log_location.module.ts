import { Module } from '@nestjs/common';
import { LogLocationService } from './log_location.service';
import { LogLocationController } from './log_location.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [LogLocationController],
  providers: [LogLocationService, PrismaService],
})
export class LogLocationModule {}
