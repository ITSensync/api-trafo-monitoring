import { PartialType } from '@nestjs/mapped-types';
import { CreateTrafoDto } from './create-trafo.dto';

export class UpdateTrafoDto extends PartialType(CreateTrafoDto) {}
