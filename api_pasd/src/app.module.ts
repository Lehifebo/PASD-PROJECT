import { Module } from '@nestjs/common';
import { SchedulerModule } from './ddscheduler/scheduler.module';
import { DeliveryLogicModule } from './delivery_logic/package.module';
import { WarehouseWorkerModule } from './warehouse_worker/warehouse_worker.module';
import { DddelivererModule } from './dddeliverer/dddeliverer.module';

@Module({
  imports: [DeliveryLogicModule,SchedulerModule, WarehouseWorkerModule, DddelivererModule],
})
export class AppModule {}
