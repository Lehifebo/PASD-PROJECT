import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { deliveryProvider } from './delivery.provider';
import { PackageController } from './package.controller';
import { packageProvider } from './package.provider';
import { PackageService } from './package.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PackageController],
  providers: [PackageService, ...packageProvider,...deliveryProvider],
})
export class DeliveryLogicModule {}