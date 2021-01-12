import { Test } from '@nestjs/testing';

import { PointController } from '../point.controller';
import { PointService } from '../point.service';
import { Repository, Service } from '../../enums';

export const compileTestPointModule = async () => {
  const moduleRef = await Test.createTestingModule({
    controllers: [PointController],
    imports: [],
    providers: [
      {
        provide: Repository.PointRepository,
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

  return {
    pointController,
    pointService,
  };
};
