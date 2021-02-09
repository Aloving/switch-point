import { PointController } from './point.controller';
import { PointService } from './point.service';
import { compileTestPointModule } from './helpers/testHelpers';

describe('PointController', () => {
  let pointController: PointController;
  let pointService: PointService;

  beforeEach(async () => {
    const pointModule = await compileTestPointModule();

    pointController = pointModule.pointController;
    pointService = pointModule.pointService;
  });

  describe('setStatus', () => {
    it('should call create method and return value', async () => {
      const testData = {
        isActive: false,
        pointId: '123',
        pointGroupId: 'test',
      };

      jest.spyOn(pointService, 'setIsActive').mockResolvedValue('ok' as any);

      const response = await pointController.setStatus('10', testData);

      expect(pointService.setIsActive).toHaveBeenCalledWith(testData);
      expect(response).toEqual('ok');
    });
  });
});
