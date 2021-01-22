import { PartialType } from '@nestjs/mapped-types';
import { CreatePointGroupDto } from './create-point-group.dto';
import { PointGroup } from '../entities';

export class UpdatePointGroupDto extends PointGroup {}
