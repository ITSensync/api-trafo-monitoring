import { Module } from '@nestjs/common';
import { TrafoService } from './trafo.service';
import { TrafoController } from './trafo.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TrafoController],
  providers: [TrafoService, PrismaService],
})
export class TrafoModule {}
