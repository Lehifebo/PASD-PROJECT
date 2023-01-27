import { Module } from '@nestjs/common';
import { WarehouseWorkerService } from './warehouse_worker.service';
import { WarehouseWorkerController } from './warehouse_worker.controller';
import { deliveryProvider } from 'src/delivery_logic/delivery.provider';
import { packageProvider } from 'src/delivery_logic/package.provider';
import { PackageService } from 'src/delivery_logic/package.service';
import { DatabaseModule } from 'src/database/database.module';
import { DeliveryLogicModule } from 'src/delivery_logic/package.module';

@Module({
    
    imports:[DeliveryLogicModule,DatabaseModule],
    providers: [WarehouseWorkerService,PackageService,... packageProvider,... deliveryProvider],
    controllers: [WarehouseWorkerController]
   
})
export class WarehouseWorkerModule {}
