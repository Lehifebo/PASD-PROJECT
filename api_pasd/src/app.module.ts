import { Module } from '@nestjs/common';
import { SchedulerModule } from './scheduler/scheduler.module';
import { DeliveryLogicModule } from './d_logic/package.module';
import { WarehouseWorkerModule } from './warehouse_worker/warehouse_worker.module';
import { DddelivererModule } from './deliverer/dddeliverer.module';

@Module({
  imports: [DeliveryLogicModule,SchedulerModule, WarehouseWorkerModule, DddelivererModule],
})
export class AppModule {}
