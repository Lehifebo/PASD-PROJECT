import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { deliveryProvider } from 'src/d_logic/delivery.provider';
import { PackageController } from 'src/d_logic/package.controller';
import { DeliveryLogicModule } from 'src/d_logic/package.module';
import { packageProvider } from 'src/d_logic/package.provider';
import { PackageService } from 'src/d_logic/package.service';
import { DddelivererController } from './dddeliverer.controller';
import { DddelivererService } from './dddeliverer.service';
import { delivererProvider} from './dddeliverer.providers'
@Module({
  imports:[DeliveryLogicModule,DatabaseModule],
  controllers: [DddelivererController],
  providers: [DddelivererService,PackageService,...delivererProvider,...deliveryProvider,... packageProvider]
})
export class DddelivererModule {}
