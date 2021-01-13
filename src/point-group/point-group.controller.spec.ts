import { PointGroupController } from './point-group.controller';
import { PointGroupService } from './point-group.service';
import { compileTestPointGroupModule } from './helpers/testHelpers';

describe('PointGroupController', () => {
  let pointGroupController: PointGroupController;
  let pointGroupService: PointGroupService;

  beforeEach(async () => {
    const pointGroupModule = await compileTestPointGroupModule();

    pointGroupController = pointGroupModule.pointGroupController;
    pointGroupService = pointGroupModule.pointGroupService;
  });

  describe('create', () => {
    it('should call create method and return value', async () => {
      const testData = {
        name: 'test_name',
        description: 'test_description',
      };

      jest.spyOn(pointGroupService, 'create').mockResolvedValue('ok' as never);

      const response = await pointGroupController.create(testData);

      expect(pointGroupService.create).toHaveBeenCalledWith(testData);
      expect(response).toEqual('ok');
    });
  });

  describe('findAll', () => {
    it('should call findAll method and return value', async () => {
      jest
        .spyOn(pointGroupService, 'findAll')
        .mockResolvedValue(['ok', 'ok'] as never);

      const response = await pointGroupController.findAll();

      expect(pointGroupService.findAll).toHaveBeenCalled();
      expect(response).toEqual(['ok', 'ok']);
    });
  });

  describe('update', () => {
    it('should call update method and return value', async () => {
      const testPayload = {
        name: 'test_name',
        description: 'test_description',
      };

      jest.spyOn(pointGroupService, 'update').mockResolvedValue('ok' as never);

      const response = await pointGroupService.update(10, testPayload);

      expect(pointGroupService.update).toHaveBeenCalledWith(10, testPayload);
      expect(response).toEqual('ok');
    });
  });

  describe('remove', () => {
    it('should call remove method and return value', async () => {
      jest.spyOn(pointGroupService, 'remove').mockResolvedValue('ok' as never);

      const response = await pointGroupController.remove('10');

      expect(pointGroupService.remove).toHaveBeenCalledWith(10);
      expect(response).toEqual('ok');
    });
  });
});
