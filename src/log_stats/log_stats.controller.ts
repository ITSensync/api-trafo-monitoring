/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { LogStatsService } from './log_stats.service';

@Controller('log-stats')
export class LogStatsController {
  constructor(private logStatsService: LogStatsService) {}

  @Post()
  async addLog(@Res() response: Response) {
    const result = await this.logStatsService.add();
    response.status(result.status).send(result);
  }

  @Get()
  async getAllLog(@Res() response: Response, @Query() query: any) {
    const result = await this.logStatsService.getAll(query.date);
    response.status(result.status).send(result);
  }
}
