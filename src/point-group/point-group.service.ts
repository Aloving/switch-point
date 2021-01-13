import { Inject, Injectable } from '@nestjs/common';
import { CreatePointGroupDto } from './dto/create-point-group.dto';
import { UpdatePointGroupDto } from './dto/update-point-group.dto';
import { Repository as RepositoryEnum } from '../enums';
import { Repository } from 'typeorm';
import { PointGroup } from './entities';

@Injectable()
export class PointGroupService {
  constructor(
    @Inject(RepositoryEnum.PointGroupRepository)
    private pointGroupRepository: Repository<PointGroup>,
  ) {}

  create(createPointGroupDto: CreatePointGroupDto) {
    return 'This action adds a new pointGroup';
  }

  findAll() {
    return `This action returns all pointGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pointGroup`;
  }

  update(id: number, updatePointGroupDto: UpdatePointGroupDto) {
    return `This action updates a #${id} pointGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} pointGroup`;
  }
}
