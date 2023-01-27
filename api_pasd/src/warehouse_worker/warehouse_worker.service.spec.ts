import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseWorkerService } from './warehouse_worker.service';

describe('WarehouseWorkerService', () => {
  let service: WarehouseWorkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarehouseWorkerService],
    }).compile();

    service = module.get<WarehouseWorkerService>(WarehouseWorkerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
