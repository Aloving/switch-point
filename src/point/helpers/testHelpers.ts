import { Test } from '@nestjs/testing';
import { Repository } from 'typeorm';

import { PointController } from '../point.controller';
import { PointService } from '../point.service';
import { Repository as RepositoryEnum, Service } from '../../enums';
import { Point } from '../entities';

export const compileTestPointModule = async () => {
  const moduleRef = await Test.createTestingModule({
    controllers: [PointController],
    imports: [],
    providers: [
      {
        provide: RepositoryEnum.PointRepository,
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
        provide: Service.PointService,
        useClass: PointService,
      },
    ],
  }).compile();
  const pointController = moduleRef.get<PointController>(PointController);
  const pointService = moduleRef.get<PointService>(Service.PointService);
  const pointRepository = moduleRef.get<Repository<Point>>(
    RepositoryEnum.PointRepository,
  );

  return {
    pointController,
    pointService,
    pointRepository,
  };
};
