import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { Response } from 'express';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  async add(@Body() locationDto: CreateLocationDto, @Res() response: Response) {
    const result = await this.locationService.add(locationDto);
    return response.status(result.status).send(result);
  }

  @Get()
  async getAll(@Res() response: Response) {
    const result = await this.locationService.get();
    return response.status(result.status).send(result);
  }
}
