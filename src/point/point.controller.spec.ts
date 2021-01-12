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

  describe('create', () => {
    it('should call create method and return value', async () => {
      const testData = {
        name: 'test_name',
        description: 'test_description',
      };

      jest.spyOn(pointService, 'create').mockResolvedValue('ok' as any);

      const response = await pointController.create(testData);

      expect(pointService.create).toHaveBeenCalledWith(testData);
      expect(response).toEqual('ok');
    });
  });

  describe('findAll', () => {
    it('should call findAll method and return value', async () => {
      jest
        .spyOn(pointService, 'findAll')
        .mockResolvedValue(['ok', 'ok'] as any);

      const response = await pointController.findAll();

      expect(pointService.findAll).toHaveBeenCalled();
      expect(response).toEqual(['ok', 'ok']);
    });
  });

  describe('update', () => {
    it('should call update method and return value', async () => {
      const testPayload = {
        name: 'test_name',
        description: 'test_description',
      };

      jest.spyOn(pointService, 'update').mockResolvedValue('ok' as any);

      const response = await pointController.update('10', testPayload);

      expect(pointService.update).toHaveBeenCalledWith(10, testPayload);
      expect(response).toEqual('ok');
    });
  });

  describe('remove', () => {
    it('should call remove method and return value', async () => {
      jest.spyOn(pointService, 'remove').mockResolvedValue('ok' as any);

      const response = await pointController.remove('10');

      expect(pointService.remove).toHaveBeenCalledWith(10);
      expect(response).toEqual('ok');
    });
  });
});
