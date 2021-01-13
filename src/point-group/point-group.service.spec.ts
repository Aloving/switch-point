import { Test, TestingModule } from '@nestjs/testing';
import { PointGroupService } from './point-group.service';

describe('PointGroupService', () => {
  let service: PointGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointGroupService],
    }).compile();

    service = module.get<PointGroupService>(PointGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
