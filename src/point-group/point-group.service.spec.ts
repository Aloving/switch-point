import { Repository } from 'typeorm';

import { PointGroupService } from './point-group.service';
import { compileTestPointGroupModule } from './helpers/testHelpers';
import { PointGroup } from './entities';

describe('PointGroupService', () => {
  let pointGroupRepository: Repository<PointGroup>;
  let pointGroupService: PointGroupService;

  beforeEach(async () => {
    const pointGroupModule = await compileTestPointGroupModule();

    pointGroupRepository = pointGroupModule.pointGroupRepository;
    pointGroupService = pointGroupModule.pointGroupService;
  });

  describe('create', () => {
    it('should call save method with create generated data and return value', async () => {
      const inputData = {
        name: 'test_name',
        description: 'test_description',
        points: [],
      };
      const createResponse = {
        id: 1,
        name: 'test_name',
        description: 'test_description',
        points: [],
      };

      (pointGroupRepository.create as jest.Mock).mockImplementation(
        () => createResponse,
      );
      (pointGroupRepository.save as jest.Mock).mockResolvedValue('ok');

      const response = await pointGroupService.create(inputData);

      expect(pointGroupRepository.create).toHaveBeenCalledWith({
        ...inputData,
        points: [],
      });
      expect(pointGroupRepository.save).toHaveBeenCalledWith(createResponse);
      expect(response).toEqual('ok');
    });
  });

  describe('findAll', () => {
    it('should call find method ', () => {
      pointGroupService.findAll();

      expect(pointGroupRepository.find).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should call update wth right params', async () => {
      const testData = {
        id: '10',
        name: 'test_name',
        description: 'test_description',
        points: [],
      };

      (pointGroupRepository.create as jest.Mock).mockImplementation(
        () => testData,
      );
      (pointGroupRepository.save as jest.Mock).mockResolvedValue('ok');

      const response = await pointGroupService.update('10', testData);

      expect(pointGroupRepository.create).toHaveBeenCalledWith(testData);
      expect(pointGroupRepository.save).toHaveBeenCalledWith(testData);
      expect(response).toEqual('ok');
    });
  });

  describe('remove', () => {
    it('should call delete method and return its value', async () => {
      (pointGroupRepository.delete as jest.Mock).mockImplementation(() => 'ok');

      const response = await pointGroupService.remove('10');

      expect(pointGroupRepository.delete).toHaveBeenCalledWith('10');
      expect(response).toEqual('ok');
    });
  });
});
