import { PartialType } from '@nestjs/mapped-types';
import { CreatePointGroupDto } from './create-point-group.dto';

export class UpdatePointGroupDto extends PartialType(CreatePointGroupDto) {}
