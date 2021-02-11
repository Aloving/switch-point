import { Repository } from 'typeorm';

import { Point } from './entities';
import { PointService } from './point.service';
import { compileTestPointModule } from './helpers/testHelpers';

describe('PointService', () => {
  let pointService: PointService;
  let pointRepository: Repository<Point>;

  beforeEach(async () => {
    const pointModule = await compileTestPointModule();

    pointService = pointModule.pointService;
    pointRepository = pointModule.pointRepository;
  });

  describe('setIsActive', () => {
    it('should call setIsActive wth right params', () => {
      (pointRepository.update as jest.Mock).mockImplementation(() => 'ok');

      const response = pointService.setIsActive('point_id_test', false);

      expect(pointRepository.update).toHaveBeenCalledWith('point_id_test', {
        isActive: false,
      });
      expect(response).not.toEqual('ok');
    });
  });
});
