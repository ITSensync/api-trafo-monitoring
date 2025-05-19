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
import { TrafoService } from './trafo.service';
import { Response } from 'express';
import { UpdateTrafoDto } from './dto/update-trafo.dto';
import { CreateTrafoDto } from './dto/create-trafo.dto';

@Controller('trafo')
export class TrafoController {
  constructor(private readonly trafoService: TrafoService) {}

  @Get()
  async getAll(@Res() response: Response) {
    const result = await this.trafoService.getAll();
    return response.status(result.status).send(result);
  }

  @Get('/:id')
  async getOne(@Res() response: Response, @Param('id') id: string) {
    const result = await this.trafoService.get(id);
    return response.status(result.status).send(result);
  }

  @Post()
  async add(@Res() response: Response, @Body() trafoDto: CreateTrafoDto) {
    const result = await this.trafoService.insert(trafoDto);
    return response.status(result.status).send(result);
  }

  @Patch('/:id')
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() trafoDto: UpdateTrafoDto,
  ) {
    const result = await this.trafoService.update(trafoDto, id);
    return response.status(result.status).send(result);
  }

  @Delete('/:id')
  async delete(@Res() response: Response, @Param('id') id: string) {
    const result = await this.trafoService.delete(id);
    return response.status(result.status).send(result);
  }
}
