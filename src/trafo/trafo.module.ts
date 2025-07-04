import { Module } from '@nestjs/common';
import { TrafoService } from './trafo.service';
import { TrafoController } from './trafo.controller';
import { PrismaService } from 'prisma/prisma.service';
import { LogLocationService } from 'src/log_location/log_location.service';

@Module({
  controllers: [TrafoController],
  providers: [TrafoService, PrismaService, LogLocationService],
})
export class TrafoModule {}
