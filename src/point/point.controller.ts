import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Service } from '../enums';
import { PointService } from './point.service';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';

@ApiTags('points')
@Controller('point')
export class PointController {
  constructor(
    @Inject(Service.PointService) private readonly pointService: PointService,
  ) {}

  @Post()
  create(@Body() createPointDto: CreatePointDto) {
    return this.pointService.create(createPointDto);
  }

  @Get()
  findAll() {
    return this.pointService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePointDto: UpdatePointDto) {
    return this.pointService.update(+id, updatePointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pointService.remove(+id);
  }
}
