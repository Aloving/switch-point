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
import { PointGroupService } from './point-group.service';
import { CreatePointGroupDto, UpdatePointGroupDto } from './dto';

@ApiTags('point-group')
@Controller('point-group')
export class PointGroupController {
  constructor(
    @Inject(Service.PointGroupService)
    private readonly pointGroupService: PointGroupService,
  ) {}

  @Post()
  create(@Body() createPointGroupDto: CreatePointGroupDto) {
    return this.pointGroupService.create(createPointGroupDto);
  }

  @Get()
  findAll() {
    return this.pointGroupService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePointGroupDto: UpdatePointGroupDto,
  ) {
    return this.pointGroupService.update(+id, updatePointGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pointGroupService.remove(+id);
  }
}
