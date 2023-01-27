import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Inject, Param } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { WarehouseWorkerService } from './warehouse_worker.service';

@Controller('warehouse-worker')
export class WarehouseWorkerController {
constructor(private readonly warehouse_wrokerService:WarehouseWorkerService ){}
    
@Post('upload/:id')
uploadFile(
    @Param('id')id
) {
    return this.warehouse_wrokerService.updateLabel(id)
}

}
