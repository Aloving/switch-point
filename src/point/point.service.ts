import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Point } from './entities';
import { Repository as RepositoryEnum } from '../enums';

@Injectable()
export class PointService {
  constructor(
    @Inject(RepositoryEnum.PointRepository)
    private pointRepository: Repository<Point>,
  ) {}

  setIsActive(id, isActive) {
    return this.pointRepository.update(id, { isActive });
  }
}
