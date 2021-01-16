import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Point } from './entities';
import { Repository as RepositoryEnum } from '../enums';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';

@Injectable()
export class PointService {
  constructor(
    @Inject(RepositoryEnum.PointRepository)
    private pointRepository: Repository<Point>,
  ) {}

  create({ name, pointGroupId }: CreatePointDto) {
    const point = this.pointRepository.create({
      name,
      pointGroupId,
    });

    return this.pointRepository.save(point);
  }

  findAll() {
    return this.pointRepository.find();
  }

  update(id: number, { name }: UpdatePointDto) {
    return this.pointRepository.update(id, { name });
  }

  remove(id: number) {
    return this.pointRepository.delete(id);
  }
}
