import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { Response } from 'express';
import { UpdateLocationDto } from './dto/update-location.dto';

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

  @Get('/:id')
  async getOne(@Res() response: Response, @Param('id') id: string) {
    const result = await this.locationService.getOne(id);
    return response.status(result.status).send(result);
  }

  @Patch('/:id')
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateDto: UpdateLocationDto,
  ) {
    const result = await this.locationService.update(id, updateDto);
    return response.status(result.status).send(result);
  }

  @Delete('/:id')
  async delete(@Res() response: Response, @Param('id') id: string) {
    const result = await this.locationService.remove(id);
    return response.status(result.status).send(result);
  }
}
