import { Controller, Get, Res } from '@nestjs/common';
import { TrafoService } from './trafo.service';
import { Response } from 'express';

@Controller('trafo')
export class TrafoController {
  constructor(private readonly trafoService: TrafoService) {}

  @Get()
  async getAll(@Res() response: Response) {
    const result = await this.trafoService.getAll();
    return response.status(result.status).send(result);
  }
}
