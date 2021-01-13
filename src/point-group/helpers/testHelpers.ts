import { Test } from '@nestjs/testing';
import { Repository } from 'typeorm';

import { PointGroupController } from '../point-group.controller';
import { PointGroupService } from '../point-group.service';
import { Repository as RepositoryEnum, Service } from '../../enums';
import { PointGroup } from '../entities';

export const compileTestPointGroupModule = async () => {
  const moduleRef = await Test.createTestingModule({
    controllers: [PointGroupController],
    imports: [],
    providers: [
      {
        provide: RepositoryEnum.PointGroupRepository,
        useValue: {
          create: jest.fn(),
          save: jest.fn(),
          find: jest.fn(),
          findOne: jest.fn(),
          update: jest.fn(),
          delete: jest.fn(),
        },
      },
      {
        provide: Service.PointGroupService,
        useClass: PointGroupService,
      },
    ],
  }).compile();
  const pointGroupController = moduleRef.get<PointGroupController>(
    PointGroupController,
  );
  const pointGroupService = moduleRef.get<PointGroupService>(
    Service.PointGroupService,
  );
  const pointGroupRepository = moduleRef.get<Repository<PointGroup>>(
    RepositoryEnum.PointGroupRepository,
  );

  return {
    pointGroupController,
    pointGroupService,
    pointGroupRepository,
  };
};
