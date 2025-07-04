import { Controller, Get, Post, Res } from '@nestjs/common';
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
  async getAllLog(@Res() response: Response) {
    const result = await this.logStatsService.getAll();
    response.status(result.status).send(result);
  }
}
