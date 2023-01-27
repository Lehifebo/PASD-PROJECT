import { Module } from '@nestjs/common';
import { WarehouseWorkerService } from './warehouse_worker.service';
import { WarehouseWorkerController } from './warehouse_worker.controller';
import { deliveryProvider } from 'src/d_logic/delivery.provider';
import { packageProvider } from 'src/d_logic/package.provider';
import { PackageService } from 'src/d_logic/package.service';
import { DatabaseModule } from 'src/database/database.module';
import { DeliveryLogicModule } from 'src/d_logic/package.module';

@Module({
    
    imports:[DeliveryLogicModule,DatabaseModule],
    providers: [WarehouseWorkerService,PackageService,... packageProvider,... deliveryProvider],
    controllers: [WarehouseWorkerController]
   
})
export class WarehouseWorkerModule {}
