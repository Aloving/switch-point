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
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { Service } from '../enums';
import { PointGroupService } from './point-group.service';
import { CreatePointGroupDto, UpdatePointGroupDto } from './dto';
import { PointGroup } from './entities';

@ApiTags('point-groups')
@Controller('point-groups')
export class PointGroupController {
  constructor(
    @Inject(Service.PointGroupService)
    private readonly pointGroupService: PointGroupService,
  ) {}

  @Post()
  @ApiResponse({
    status: 200,
    type: PointGroup,
    description: 'A point group',
  })
  create(@Body() createPointGroupDto: CreatePointGroupDto) {
    return this.pointGroupService.create(createPointGroupDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: PointGroup,
    isArray: true,
    description: 'Point Groups',
  })
  findAll() {
    return this.pointGroupService.findAll();
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    type: PointGroup,
    description: 'A point group',
  })
  update(
    @Param('id') id: string,
    @Body() updatePointGroupDto: UpdatePointGroupDto,
  ) {
    return this.pointGroupService.update(id, updatePointGroupDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Just ok status',
  })
  remove(@Param('id') id: string) {
    return this.pointGroupService.remove(id);
  }
}
