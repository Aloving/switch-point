import { Controller, Body, Put, Param, Inject } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Service } from '../enums';
import { PointService } from './point.service';
import { SetIsActiveDto } from './dto';
import { Point } from './entities';

@ApiTags('point')
@Controller('point')
export class PointController {
  constructor(
    @Inject(Service.PointService) private readonly pointService: PointService,
  ) {}

  @Put(':id/setStatus')
  @ApiResponse({
    status: 200,
    type: Point,
    description: 'Data of a point',
  })
  setStatus(@Param('id') id: string, @Body() setIsActiveDto: SetIsActiveDto) {
    return this.pointService.setIsActive(setIsActiveDto);
  }
}
