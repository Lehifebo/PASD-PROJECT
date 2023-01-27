import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseWorkerController } from './warehouse_worker.controller';

describe('WarehouseWorkerController', () => {
  let controller: WarehouseWorkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarehouseWorkerController],
    }).compile();

    controller = module.get<WarehouseWorkerController>(WarehouseWorkerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
