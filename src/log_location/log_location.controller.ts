import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { LogLocationService } from './log_location.service';
import { CreateLogLocationDto } from './dto/create-log_location.dto';
import { Response } from 'express';

@Controller('log-location')
export class LogLocationController {
  constructor(private readonly logLocationService: LogLocationService) {}

  @Post()
  async create(
    @Body() createLogLocationDto: CreateLogLocationDto,
    @Res() response: Response,
  ) {
    const result = await this.logLocationService.create(createLogLocationDto);
    response.status(result.status).send(result);
  }

  @Get()
  async findAll(@Res() response: Response) {
    const result = await this.logLocationService.findAll();
    response.status(result.status).send(result);
  }
}
