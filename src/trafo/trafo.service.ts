import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Trafo } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { Response } from 'src/Response/Response';

@Injectable()
export class TrafoService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Response<Trafo[]>> {
    try {
      const allData = await this.prismaService.trafo.findMany();
      return {
        data: allData,
        message: 'GET TRAFO DATA SUCCESS',
        status: HttpStatus.OK,
      };
    } catch (error) {
      console.error(error);
      throw new UnprocessableEntityException(error);
    }
  }
}
