import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Point } from './entities';
import { Repository as RepositoryEnum } from '../enums';
import { SetIsActiveDto } from './dto';

@Injectable()
export class PointService {
  constructor(
    @Inject(RepositoryEnum.PointRepository)
    private pointRepository: Repository<Point>,
  ) {}

  setIsActive({ pointId, pointGroupId, isActive }: SetIsActiveDto) {
    return this.pointRepository.update(
      { id: pointId, pointGroupId },
      { isActive },
    );
  }
}
