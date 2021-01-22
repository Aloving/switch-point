import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';

import { Repository as RepositoryEnum } from '../enums';
import { CreatePointGroupDto, UpdatePointGroupDto } from './dto';
import { PointGroup } from './entities';

@Injectable()
export class PointGroupService {
  constructor(
    @Inject(RepositoryEnum.PointGroupRepository)
    private pointGroupRepository: Repository<PointGroup>,
  ) {}

  create({ name, description, points = [] }: CreatePointGroupDto) {
    const pointGroup = this.pointGroupRepository.create({
      name,
      description,
      points,
    });

    return this.pointGroupRepository.save(pointGroup);
  }

  findAll() {
    return this.pointGroupRepository.find();
  }

  update(id: string, { points, description, name }: UpdatePointGroupDto) {
    const updatedPointGroup = this.pointGroupRepository.create({
      id,
      description,
      name,
      points,
    });

    return this.pointGroupRepository.save(updatedPointGroup);
  }

  async remove(id: string) {
    return await this.pointGroupRepository.delete(id);
  }
}
