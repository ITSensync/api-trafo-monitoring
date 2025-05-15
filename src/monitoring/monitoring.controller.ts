import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { MonitoringService } from './monitoring.service';
import { CreateMonitoringDto } from './dto/create-monitoring.dto';
import { Response } from 'express';

@Controller('monitoring')
export class MonitoringController {
  constructor(private readonly monitoringService: MonitoringService) {}

  @Post()
  async insertData(
    @Body() requestBody: CreateMonitoringDto,
    @Res() response: Response,
  ) {
    const result = await this.monitoringService.insert(requestBody);
    return response.status(result.status).send(result);
  }

  @Get()
  async getAll(@Res() response: Response) {
    const result = await this.monitoringService.get();
    return response.status(result.status).send(result);
  }
}
