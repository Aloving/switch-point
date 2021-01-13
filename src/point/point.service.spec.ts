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

  describe('create', () => {
    it('should call save method with create generated data and return value', async () => {
      const inputData = {
        name: 'test_name',
        description: 'test_description',
      };
      const createResponse = {
        id: 1,
        name: 'test_name',
        description: 'test_description',
        isActive: false,
      };

      (pointRepository.create as jest.Mock).mockImplementation(
        () => createResponse,
      );
      (pointRepository.save as jest.Mock).mockResolvedValue('ok');

      const response = await pointService.create(inputData);

      expect(pointRepository.create).toHaveBeenCalledWith({
        ...inputData,
        isActive: false,
      });
      expect(pointRepository.save).toHaveBeenCalledWith(createResponse);
      expect(response).toEqual('ok');
    });
  });

  describe('findAll', () => {
    it('should call find method ', () => {
      pointService.findAll();

      expect(pointRepository.find).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should call update wth right params', () => {
      const testData = {
        name: 'test_name',
        description: 'test_description',
      };

      (pointRepository.update as jest.Mock).mockImplementation(() => 'ok');

      const response = pointService.update(10, testData);

      expect(pointRepository.update).toHaveBeenCalledWith(10, testData);
      expect(response).toEqual('ok');
    });
  });

  describe('remove', () => {
    it('should call delete method and return its value', async () => {
      (pointRepository.delete as jest.Mock).mockImplementation(() => 'ok');

      const response = await pointService.remove(10);

      expect(pointRepository.delete).toHaveBeenCalledWith(10);
      expect(response).toEqual('ok');
    });
  });
});
